import React, { useEffect, useState } from 'react';


const PREFIX = "whatsapp-clone-";   
export default function LocalStorage (key,initialValue) {
    const PREFIXEDVALUE = PREFIX + key;
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(PREFIXEDVALUE);

        if (jsonValue !== null) {
             return   JSON.parse(jsonValue)
        }
        
        if (typeof initialValue === 'function') {
            return initialValue()
        } else {
          return  initialValue
        }
    })


    useEffect(() => {
        localStorage.setItem(PREFIXEDVALUE,JSON.stringify(value))
    }, [PREFIXEDVALUE, value]) 

    return [value, setValue];
};

