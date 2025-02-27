/**
 * Gets the MIDI access object or null if the browser does not support or allow it.
 * @returns {Promise<MIDIAccess | null>}
 */
async function getMidiAccess() {
    try {
        return await navigator.requestMIDIAccess({ sysex: true })
    } catch {
        return null
    }
}

/**
 * The MIDI access object or null if the browser does not support or allow it.
 * @type {MIDIAccess | null}
 */
const midiAccess = await getMidiAccess()

export default midiAccess

/**
 * Whether the browser supports and allows MIDI access.
 * @type {boolean}
 */
export const hasMidiAccess = midiAccess !== null
