import { SnackContext } from 'context/SnackContext';
import { useContext } from 'react';

export function useSnack() {
	return useContext(SnackContext);
}
