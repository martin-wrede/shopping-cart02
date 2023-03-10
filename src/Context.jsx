import React, {  useEffect, useState } from "react"

const Context = React.createContext()


function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    
   // old error handling solution with promises 
    /*
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
            .catch(error => {
                alert(error);
                // console.error(error)
            }
               
                )

    }, [])
    */

    // new solution with async-await in useeffect
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setAllPhotos(data);
            } catch (error) {
                alert(error);
                // console.error(error);
            }
        };
    
        fetchData();
    }, []);
    
    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        
        setAllPhotos(updatedArr)
    }
    
    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
    
    return (
        <Context.Provider value={{allPhotos, toggleFavorite, cartItems,setCartItems, addToCart, removeFromCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}