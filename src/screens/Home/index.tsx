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

import {
  Drake,
  Nacional,
  Mamonas,
  Assassinas,
  Spliknot,
  Beatles,
  Hipsters,
  Lambada3,
  CanalTech,
  PodProgramar,
  Mix1,
  Mix2,
  Mix3,
  Mix4,
  Mix5,
  Legiao,
  Liked,
  Safadao,
  DuaLipa,
  Sertanejo,
  Top50,
  Top2019,
  Top2018,
  Top2017
} from '../../components/Image';

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