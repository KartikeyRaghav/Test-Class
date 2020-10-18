import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default class App extends Component {
  playSound1 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://soundbible.com/mp3/service-bell_daniel_simion.mp3' },
      { shouldPlay: true }
    );
  };

  playSound2 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://soundbible.com/mp3/grenade-launcher-daniel_simon.mp3' },
      { shouldPlay: true }
    );
  };

  playSound3 = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          'https://soundbible.com/mp3/Shotgun_Blast-Jim_Rogers-1914772763.mp3',
      },
      { shouldPlay: true }
    );
  };

  playSound4 = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          'https://soundbible.com/mp3/M1 Garand Gun-SoundBible.com-1519788442.mp3',
      },
      { shouldPlay: true }
    );
  };

  playSound5 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://soundbible.com/mp3/Slap-SoundMaster13-49669815.mp3' },
      { shouldPlay: true }
    );
  };

  playSound6 = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          'https://soundbible.com/mp3/Knocking On Door-SoundBible.com-84643603.mp3',
      },
      { shouldPlay: true }
    );
  };

  playSound7 = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          'https://soundbible.com/mp3/Teacher Charlie Brown Talking-SoundBible.com-1454295165.mp3',
      },
      { shouldPlay: true }
    );
  };

  playSound8 = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          'https://soundbible.com/mp3/Audience_Applause-Matthiew11-1206899159.mp3',
      },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <View>
        <Text
          style={{
            backgroundColor: '#66ff33',
            fontSize: 30,
            marginLeft: 8,
            width: 310,
            fontWeight: 'bold',
            fontStyle: 'italic',
          }}>
          Click the buttons to play different sounds.
        </Text>

        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            marginTop: 40,
            marginLeft: 40,
            height: 50,
            borderRadius: 10,
            borderColor: 'yellow',
            borderWidth: 3,
            backgroundColor: 'red',
          }}
          onPress={this.playSound1}>
          <Text style={{ color: '#00ffff', fontWeight: 'bold', fontSize: 20 }}>
            Sound 1
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            marginTop: -50,
            marginLeft: 170,
            height: 50,
            borderRadius: 10,
            borderColor: 'yellow',
            borderWidth: 3,
            backgroundColor: 'blue',
          }}
          onPress={this.playSound2}>
          <Text style={{ color: '#00ff00', fontWeight: 'bold', fontSize: 20 }}>
            Sound 2
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            marginTop: 20,
            marginLeft: 40,
            height: 50,
            borderRadius: 10,
            borderColor: 'yellow',
            borderWidth: 3,
            backgroundColor: 'black',
          }}
          onPress={this.playSound3}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
            Sound 3
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            marginTop: -50,
            marginLeft: 170,
            height: 50,
            borderRadius: 10,
            borderColor: 'yellow',
            borderWidth: 3,
            backgroundColor: '#663300',
          }}
          onPress={this.playSound4}>
          <Text style={{ color: '#00ff99', fontWeight: 'bold', fontSize: 20 }}>
            Sound 4
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            marginTop: 20,
            marginLeft: 40,
            height: 50,
            borderRadius: 10,
            borderColor: 'yellow',
            borderWidth: 3,
            backgroundColor: '#3333cc',
          }}
          onPress={this.playSound5}>
          <Text style={{ color: '#ff5050', fontWeight: 'bold', fontSize: 20 }}>
            Sound 5
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            marginTop: -50,
            marginLeft: 170,
            height: 50,
            borderRadius: 10,
            borderColor: 'yellow',
            borderWidth: 3,
            backgroundColor: '#999933',
          }}
          onPress={this.playSound6}>
          <Text style={{ color: '#66ffcc', fontWeight: 'bold', fontSize: 20 }}>
            Sound 6
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            marginTop: 20,
            marginLeft: 40,
            height: 50,
            borderRadius: 10,
            borderColor: 'yellow',
            borderWidth: 3,
            backgroundColor: '#ffa500',
          }}
          onPress={this.playSound7}>
          <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20 }}>
            Sound 7
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            marginTop: -50,
            marginLeft: 170,
            height: 50,
            borderRadius: 10,
            borderColor: 'yellow',
            borderWidth: 3,
            backgroundColor: '#ff3300',
          }}
          onPress={this.playSound8}>
          <Text style={{ color: '#000066', fontWeight: 'bold', fontSize: 20 }}>
            Sound 8
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
