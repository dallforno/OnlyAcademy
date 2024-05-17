import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import GridImageView from "react-native-grid-image-viewer";
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import Camera from "./Camera"; // Verifique o caminho do arquivo da câmera

const image = require('../assets/capa.jpg');

const ProfileScreen = ({ navigation }) => {

  const handleOpenCamera = () => {
    navigation.navigate('Camera'); // Supondo que 'Camera' seja o nome da rota para a tela da câmera
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={require('../assets/profile.jpg')}
            />
            <Text style={styles.name}>Igor Dall Forno</Text>
            <Text style={styles.arroba}>@ig.forno</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.profileDetail}>
        <View style={[styles.detailContent, { paddingRight: 10, marginRight: 5, borderRightWidth: 2, borderRightColor: "#fff" }]}>
          <Text style={styles.count}>2.390</Text>
          <Text style={styles.title}>Seguidores</Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.count}>398</Text>
          <Text style={styles.title}>Seguindo</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.buttonOne, { marginRight: 10 }]}>
              <Text style={styles.buttonOneText}>
                <Ionicons
                  name="add-circle-outline"
                  size={18}
                  style={{ color: "#fff" }}
                />{" "}
                Seguir
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonTwo}>
              <Text style={styles.buttonTwoText}>
                <Ionicons
                  name="paper-plane-outline"
                  size={18}
                  style={{ color: "#000" }}
                />{" "}
                Direct
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonTwo, { marginLeft: 10 }]} onPress={handleOpenCamera}>
              <Text style={styles.buttonTwoText}>
                <Ionicons
                  name="camera-outline"
                  size={18}
                  style={{ color: "#000" }}
                />{" "}
                Câmera
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.background}>
            <Text style={styles.headline_text}>Fotos</Text>
            <View style={styles.imagesGrid}>
              <GridImageView
                data={[
                  "https://img.freepik.com/fotos-gratis/um-lobo-colorido-com-um-fundo-preto_1340-40203.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1715558400&semt=sph",
                  "https://static.vecteezy.com/ti/fotos-gratis/t1/10468057-retrato-de-onca-gratis-foto.jpg",
                  "https://s2-g1.glbimg.com/1T8I3Ld4Gi5hXCYgmUp-Ah78vLU=/0x0:1437x1690/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/4/B/xGq6UURMKb0l2NnbuWVw/00-poty1-ivan-silva-mexico.jpg"
                ]}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0b52ba",
  },
  headerContent: {
    paddingTop: 70,
    padding: 50,
    height: 305,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    marginBottom: 2,
    color: "#FFFFFF",
    fontWeight: "400",
  },
  arroba: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "700"
  },
  profileDetail: {
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 290,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "#0b52ba",
  },
  detailContent: {
    margin: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "500",
  },
  count: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bodyContent: {
    alignItems: "center",
    padding: 30,
    marginTop: 40,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: "#696969",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  buttonOne: {
    backgroundColor: "#0b52ba",
    padding: 8,
    borderRadius: 10,
  },
  buttonTwo: {
    backgroundColor: "#FFF",
    padding: 8,
    borderRadius: 10,
  },
  buttonOneText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFF",
  },
  buttonTwoText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    fontSize: 20,
    color: "#000",
    marginTop: 10,
    textAlign: "center",
  },
  background: {
    backgroundColor: "transparent",
  },
  headline_text: {
    color: "#000",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
    marginTop: 50,
    marginBottom: 5,
    marginLeft: 20,
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: "white",
    marginLeft: 20,
    fontSize: 12,
    fontWeight: "600",
  },
  imagesGrid: {
    flex: 1,
    width: 350,
  },
});

export default ProfileScreen;
