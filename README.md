# midi-access
Simple MIDIAccess Object getter for the WebMIDI API.

## Description
* This is currently under development
* The default imported object is a simple way of getting MIDI access or gracefully dealing with failed permissions
* Access object will be either a [MIDIAccess object](https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess) or `null`

## Installation
    npm install midi-access -g

## Usage
```javascript
import midiAccess from 'midi-access'

if (midiAccess) {
    const outputs = Array.from(midiAccess.outputs.values())
    console.log('MIDI outputs:', outputs)
} else {
    console.error('No MIDI access')
}
```

## To-do
* Switch to Typescript
* Implement refresh method