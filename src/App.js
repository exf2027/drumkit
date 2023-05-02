import './App.css';
import React, { useState } from "react";
import image from './resources/background.jpg';
// import { Typography } from "@mui/material";
import { styled, ThemeProvider } from "@mui/material/styles";
import theme from './theme.js';
import useSound from 'use-sound';
import clapSound from './resources/sounds/clap.wav';
import hihatSound from './resources/sounds/hihat.wav';
import kickSound from './resources/sounds/kick.wav';
import openhatSound from './resources/sounds/openhat.wav';
import boomSound from './resources/sounds/boom.wav';
import rideSound from './resources/sounds/ride.wav';
import snareSound from './resources/sounds/snare.wav';
import tomSound from './resources/sounds/tom.wav';
import tinkSound from './resources/sounds/tink.wav';

const MyBackground = styled('div') ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: 'grey',
  height: '100vh',
  backgroundPosition:'center', 
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

const MyBackgroundImage = styled('div') ({
  position: 'absolute',
  backgroundImage: `url(${image})`,
  opacity: 0.5,
  backgroundColor: 'grey',
  height: '100%',
  width: '100%',
  backgroundPosition:'center', 
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

const MyHeader = styled('h1')(({ theme }) => ({
  position: 'relative',
  marginTop: '0',
  display: "flex",
  height: '20vh',
  alignItems: 'end', //vertical, arriba-abajo
  justifyContent: 'center', //horizontal, izq-der
}));

const MyBody = styled('div')(({ theme }) => ({
  position: 'relative',
  marginTop: '20vh',
  display: "flex",
  alignItems: 'center', //vertical, arriba-abajo
  justifyContent: 'center', //horizontal, izq-der
}));

const MyButton = styled('div')(({ theme }) => ({
  // display: "flex",
  textAlign: 'center',
  fontSize: "1.2rem",
	fontWeight: "bold",
  backgroundColor: 'rgb(0 0 0 / 0.3)',
	color: 'black',
  border: '3px solid black',
  borderRadius: '4px',
  marginLeft: '1em',
  width: '100px',
  height: '100px',
  // padding: '2em 2em',
	"&:hover": {
	  border: 'solid yellow',
    // padding: '31px 31px',
    // padding: '1.1em 1.1em',
	},
  "&:click": {
	  // size: 'slightly larger',
    // padding: '31px 31px',
    padding: '1.1em 1.1em',
	},
}));

const KeyboardText = styled('div')(({ theme }) => ({
  textAlign: 'center',
  fontSize: "1.8rem",
	fontWeight: "bold",
	color: 'black',
}));

const DrumText = styled('div')(({ theme }) => ({
  textAlign: 'center',
  fontSize: "1.2rem",
	fontWeight: "bold",
	color: 'yellow',
}));

function DrumKit() {

  const unAudio = new Audio(clapSound)
  const [soundPlaying, setSoundPlaying] = useState(unAudio);

  // const soundsPath = "/resources/sounds/";

  // const myButtons = [
  //   {value: 'A', label: 'clap', sound: (soundsPath + "clap.wav")},
  //   {value: 'S', label: 'hihat', sound: (soundsPath + "hihat.wav")},
  //   {value: 'D', label: 'kick', sound: (soundsPath + "kick.wav")},
  //   {value: 'F', label: 'openhat', sound: (soundsPath + "openhat.wav") },
  //   {value: 'G', label: 'boom', sound: (soundsPath + "boom.wav") },
  //   {value: 'H', label: 'ride', sound: (soundsPath + "ride.wav") },
  //   {value: 'J', label: 'snare', sound: (soundsPath + "snare.wav") },
  //   {value: 'K', label: 'tom', sound: (soundsPath + "tom.wav") },
  //   {value: 'L', label: 'tink', sound: (soundsPath + "tink.wav") }
  // ]

  const myButtons = [
    {value: 'A', label: 'clap', sound: new Audio(clapSound)},
    {value: 'S', label: 'hihat', sound: new Audio(hihatSound)},
    {value: 'D', label: 'kick', sound: new Audio(kickSound)},
    {value: 'F', label: 'openhat', sound: new Audio(openhatSound)},
    {value: 'G', label: 'boom', sound: new Audio(boomSound)},
    {value: 'H', label: 'ride', sound: new Audio(rideSound)},
    {value: 'J', label: 'snare', sound: new Audio(snareSound)},
    {value: 'K', label: 'tom', sound: new Audio(tomSound)},
    {value: 'L', label: 'tink', sound: new Audio(tinkSound)}
  ]

  // function onDrumClick(theSound) {
	// 	setSoundPlaying(theSound);
  //   // play();
	// };

  // const [play] = useSound(
  //   '/resources/sounds/clap.wav',
  //   // soundPlaying,
  //   // { volume: 0.25 }
  // );

  const play = () => {
    console.log(soundPlaying);
    soundPlaying.play();
  }

  return (
    <ThemeProvider theme={theme}>
      <MyBackground>
        <MyBackgroundImage></MyBackgroundImage>
        <MyHeader>DrumKit</MyHeader>
        <MyBody className="display-linebreak">
          {myButtons.map((myButton, index) => (
            <MyButton 
              key={index}
              onMouseDown={() => {
                setSoundPlaying(myButton.sound);
                play();
              }}
            >
              <KeyboardText>
                {myButton.value}
              </KeyboardText>
              <br />
              <DrumText>
                {myButton.label}
              </DrumText>
              <audio src='/resources/sounds/clap.wav'>AUDIO</audio>
            </MyButton>
          ))}
          <audio src='/resources/sounds/clap.wav'>AUDIO</audio>
        </MyBody>
      </MyBackground>
    </ThemeProvider>
  );
}

export default DrumKit;
