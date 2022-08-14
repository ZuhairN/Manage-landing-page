import { useState } from 'react';

export default function useToggle(init = false) {
    const [state, setState] = useState(init);
    const toggle = () => setState((st) => !st);
    return [state, toggle];
}