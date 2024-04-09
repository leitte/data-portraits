import { writable } from 'svelte/store';
import { questionaire as Questionfile } from '$lib/questionaire';

export const nameFirst = writable("Data");
export const nameSecond = writable("Portrait");
export const textFontSize = writable(4);
export const questionaire = writable( Questionfile );