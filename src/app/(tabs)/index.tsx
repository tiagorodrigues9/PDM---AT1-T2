import Button from "@/components/Button";
import { pizzas, Pizza } from "@/data/pizzas";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";

export default function HomeScreen() {
  const handleAdicionarItem = (pizza: Pizza) => {
    Alert.alert(
      "Item Adicionado!",
      `${pizza.nome} foi adicionado ao carrinho.`,
      [{ text: "OK" }]
    );
  };

  const renderItem = ({ item }: { item: Pizza }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imagem }} style={styles.imagem} />
      <View style={styles.textContainer}>
        <Text style={styles.nomeProduto}>{item.nome}</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
        <Text style={styles.valor}>R$ {item.valor.toFixed(2)}</Text>
      </View>
      <View style={styles.botaoContainer}>
        <Button
          title="Adicionar Item"
          variant="primary"
          onPress={() => handleAdicionarItem(item)}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🍕 Bem-vindo a Pizzaria Paquito</Text>
        <Text style={styles.subtitle}>Cardápio de Pizzas</Text>
      </View>
      <FlatList
        data={pizzas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5E6",
  },
  header: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#D32F2F",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 4,
    textAlign: "center",
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 18,
    color: "#FFE0B2",
    textAlign: "center",
    fontWeight: "500",
  },
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  itemContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    borderWidth: 1,
    borderColor: "#FFE0B2",
  },
  imagem: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: "#F5F5F5",
  },
  textContainer: {
    marginBottom: 16,
  },
  nomeProduto: {
    fontSize: 22,
    fontWeight: "700",
    color: "#D32F2F",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  descricao: {
    fontSize: 15,
    color: "#616161",
    marginBottom: 12,
    lineHeight: 22,
    textAlign: "justify",
  },
  valor: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2E7D32",
    letterSpacing: 0.5,
  },
  botaoContainer: {
    marginTop: 8,
  },
});
