import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.perfilContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.desenvolvedorContainer}>
          <Image 
            source={require('../assets/Perfil.jpg')}
            style={styles.imagem}
          />
          <View style={styles.tituloContainer}>
            <Text style={styles.nome}>
              Danilo Almeida Milhome
            </Text>
            <Text style={styles.titulo}>
              Desenvolvedor Full Stack
            </Text>
          </View>
        </View>
        <View style={styles.descricaoContainer}>
          <Text style={styles.descricao}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nobis aspernatur, assumenda cumque sapiente ducimus quo aliquid atque dolore, magni nam, ex dicta dolorem exercitationem voluptate unde laboriosam recusandae esse.
          </Text>
          <Text style={styles.descricao}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nobis aspernatur, assumenda cumque sapiente ducimus quo aliquid atque dolore, magni nam, ex dicta dolorem exercitationem voluptate unde laboriosam recusandae esse.
          </Text>
          <Text style={styles.descricao}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nobis aspernatur, assumenda cumque sapiente ducimus quo aliquid atque dolore, magni nam, ex dicta dolorem exercitationem voluptate unde laboriosam recusandae esse.
          </Text>
        </View>
      </ScrollView>
      <Pressable style={({pressed}) => [
          styles.btn, 
          {
            backgroundColor: pressed ? '#3b82f6' : '#2563eb',
          }
        ]} 
        onPress={() => navigation.navigate('Perfil')}>
        <Text style={styles.txtBtn}>Ver perfil completo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#0f172a',
    paddingHorizontal: 24,
    paddingBottom: 36,
    gap: 8
  },
  perfilContainer: {
    gap: 25,
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 20
  },
  desenvolvedorContainer: {
    gap: 10,
  },
  imagem: {
    width: 250,
    height: 250,
    borderRadius: 500
  },
  tituloContainer: {
    alignItems: 'center'
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f8fafc'
  },
  titulo: {
    fontStyle: 'italic',
    color: '#f8fafc'
  },
  descricaoContainer: {
    gap: 10
  },
  descricao: {
    textAlign: 'justify',
    color: '#f8fafc'
  },
  btn: {
    
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center'
  },
  txtBtn: {
    fontWeight: 'bold',
    color: '#f8fafc'
  }
});
