import React, { useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  FlatList
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import AntDesing from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import { BackGroundHome } from '../../components/Background';
import { styles } from './styles';
import { AlbumList } from '../../components/AlbumList';

const Top50 = require('../../assets/Top50.jpg')
const Top2019 = require('../../assets/Top2019.jpg')
const Top2018 = require('../../assets/Top2018.jpg')
const Top2017 = require('../../assets/Top2017.jpg')

const Mamonas = require('../../assets/Mamonas.jpeg')
const Drake = require('../../assets/Drake.jpeg')
const Nacional = require('../../assets/Nacional.jpeg')
const Liked = require('../../assets/Liked.png')

const Hipsters = require('../../assets/Hipsters.jpeg')
const CanalTech = require('../../assets/CanalTech.jpeg')
const PodProgramar = require('../../assets/PodProgramar.jpeg')
const Lambada3 = require('../../assets/Lambada3.jpeg')

const DuaLipa = require('../../assets/DuaLipa.jpeg')
const Safadao = require('../../assets/Safadao.jpeg')
const Sertanejo = require('../../assets/Sertanejo.jpeg')
const Legiao = require('../../assets/Legiao.jpeg')

const Mix1 = require('../../assets/Mix1.jpeg')
const Mix2 = require('../../assets/Mix2.jpeg')
const Mix3 = require('../../assets/Mix3.jpeg')
const Mix4 = require('../../assets/Mix4.jpeg')
const Mix5 = require('../../assets/Mix5.jpeg')

const Spliknot = require('../../assets/Spliknot.jpeg')
const Assassinas = require('../../assets/Assassinas.jpeg')
const Beatles = require('../../assets/Beatles.jpeg')


export function Home() {

  const [recently] = useState(
    [
      {
        author: 'Drake',
        image: Drake
      },
      {
        author: `Mamonas`,
        image: Mamonas
      },
      {
        author: 'Nacionais',
        image: Nacional
      }
    ]);

  const [tops] = useState([
    {
      author: 'Spotify',
      image: Top50
    },
    {
      author: 'Spotify',
      image: Top2019
    },
    {
      author: 'Spotify',
      image: Top2018
    },
    {
      author: 'Spotify',
      image: Top2017
    }
  ])

  const [podcasts] = useState([
    {
      author: 'CanalTech',
      image: CanalTech
    },
    {
      author: 'Hipsters',
      image: Hipsters
    },
    {
      author: 'Lambada3',
      image: Lambada3
    },
    {
      author: 'PodProgramar',
      image: PodProgramar
    },
  ])

  const [playlist] = useState([
    {
      author: 'Spotify',
      image: DuaLipa
    },
    {
      author: 'Spotify',
      image: Sertanejo
    },
    {
      author: 'Spotify',
      image: Legiao
    },
    {
      author: 'Spotify',
      image: Safadao
    },
  ])

  const [mixes] = useState([
    {
      author: 'Spotify',
      image: Mix1
    },
    {
      author: 'Spotify',
      image: Mix2
    },
    {
      author: 'Spotify',
      image: Mix3
    },
    {
      author: 'Spotify',
      image: Mix4
    },
    {
      author: 'Spotify',
      image: Mix5
    }
  ])

  const [yourPlaylist] = useState([
    {
      author: 'Você',
      image: Liked
    },
    {
      author: 'Você',
      image: Drake
    },
    {
      author: 'Você',
      image: Nacional
    },
    {
      author: 'Você',
      image: Mamonas
    },
    {
      author: 'Você',
      image: Sertanejo
    }
  ])

  const [artists] = useState([
    {
      author: 'Spliknot',
      image: Spliknot
    },
    {
      author: 'Mamonas',
      image: Assassinas
    },
    {
      author: 'The beatles',
      image: Beatles
    },
  ])

  return (
    <BackGroundHome>
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.header}>
            <Text style={styles.tittle}>Experimente algo d...</Text>
            <AntDesing name="bells" style={styles.icons} />
            <MaterialIcon name="restore" style={styles.materialIcons} />
            <EvilIcons name="gear" style={styles.evilIcons} />
          </View>

          <FlatList
            data={recently}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <AlbumList
                name={item.author}
                photoAlbum={item.image}
                source={item.image}
              />
            )}
          />

          <Text style={styles.tittleYourPlaylist}>Sua Playlist</Text>
          <FlatList
            data={yourPlaylist}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <AlbumList
                name={item.author}
                photoAlbum={item.image}
                source={item.image}
              />
            )}
          />

          <Text style={styles.tittlePlaylist}>Feita para você</Text>
          <FlatList
            data={playlist}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <AlbumList
                name={item.author}
                photoAlbum={item.image}
                source={item.image}
              />
            )}
          />

          <Text style={styles.tittleTop}>Tops</Text>
          <FlatList
            data={tops}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <AlbumList
                name={item.author}
                photoAlbum={item.image}
                source={item.image}
              />
            )}
          />

          <Text style={styles.tittleMixes}>Mixes</Text>
          <FlatList
            data={mixes}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <AlbumList
                name={item.author}
                photoAlbum={item.image}
                source={item.image}
              />
            )}
          />

          <Text style={styles.tittleArtists}>Artistas que você curte</Text>
          <FlatList
            data={artists}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <AlbumList
                name={item.author}
                photoAlbum={item.image}
                source={item.image}
              />
            )}
          />

          <Text style={styles.tittlePodcast}>Podcasts</Text>
          <FlatList
            data={podcasts}
            style={{ marginBottom: 20 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <AlbumList
                name={item.author}
                photoAlbum={item.image}
                source={item.image}
              />
            )}
          />

        </View>
      </ScrollView>
    </BackGroundHome>
  );
}