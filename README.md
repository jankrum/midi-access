# midi-access

Simple MIDIAccess Object getter for the WebMIDI API.

## Description

-   The default imported object is a simple way of getting MIDI access or gracefully dealing with failed permissions
-   Access object will be either a [MIDIAccess object](https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess) or `null`
-   Named export `hasMidiAccess` is a boolean representing whether or not we were able to get MIDI access

## Installation

    npm install midi-access -D

## Usage

```javascript
import midiAccess, { hasMidiAccess } from 'midi-access'

if (hasMidiAccess) {
    const outputs = Array.from(midiAccess.outputs.values())
    console.log('MIDI outputs:', outputs)
} else {
    console.error('No MIDI access')
}
```

## To-do

-   Implement refresh method
