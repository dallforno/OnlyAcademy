import React, { useRef, useState } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { createPost } from '../api'; // Importe a função de envio para o Supabase

export default function Camera() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);

  if (!permission) {
    // As permissões da câmera ainda estão sendo carregadas.
    return <View />;
  }

  if (!permission.granted) {
    // As permissões da câmera não foram concedidas ainda.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Precisamos da sua permissão para usar a câmera</Text>
        <Button onPress={requestPermission} title="Conceder Permissão" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  async function takePicture() {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        await savePicture(photo.uri); // Salva na galeria
        await uploadToSupabase(photo.uri); // Faz upload para o Supabase
      } catch (error) {
        console.error('Error taking picture:', error);
        alert('Failed to take picture.');
      }
    }
  }

  async function savePicture(uri) {
    try {
      await MediaLibrary.saveToLibraryAsync(uri);
      console.log('Picture saved to gallery!');
    } catch (error) {
      console.error('Error saving picture:', error);
      alert('Failed to save picture.');
    }
  }

  async function uploadToSupabase(uri) {
    try {
      const imageData = {
        image_url: uri,
        user_id: 'bdb505b6-fea3-4f93-ac0d-54d5cd005096', // Exemplo de user_id
        post_type: 'photo',
        content: 'Nova postagem de foto',
        number: '123', // Exemplo de número de postagem
        video_url: '', // Deixe vazio se não houver vídeo associado
        likes: '0',
        shares: '0',
        created_at: new Date().toISOString(), // Exemplo de data de criação
        updated_at: new Date().toISOString(), // Exemplo de data de atualização
      };
      // Envia os dados da imagem para o Supabase
      const response = await createPost(imageData); // Substitua pelo seu método de envio para o Supabase
      console.log('Image uploaded to Supabase:', response);
      alert('Picture uploaded to Supabase!');
    } catch (error) {
      console.error('Error uploading picture:', error);
      alert('Failed to upload picture.');
    }
  }

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
