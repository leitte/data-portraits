import { writable } from 'svelte/store';
import { questionaire as Questionfile } from '$lib/questionaire';

export const questionaire = writable( Questionfile );