import React from 'react'
import { useEffect, useState } from 'react';
import "./WatchList.css"
import { db } from '../../firebase';
import { collection,getDocs,querySnapshot,doc,deleteDoc } from 'firebase/firestore';

function WatchList() {
  const [watchlistItems, setWatchlistItems] = useState([]);

  useEffect(() => {
    const fetchWatchlistItems = async () => {
      try {
        const watchlistCollection = collection(db, 'watchlist'); // Updated collection method
        const querySnapshot = await getDocs(watchlistCollection); // Use getDocs to fetch the documents
        const items = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setWatchlistItems(items);
      } catch (error) {
        console.error('Error fetching watchlist items:', error);
      }
    };

    fetchWatchlistItems();
  }, []);

  const handleDelete = async (documentId) => {
    try {
      const watchlistCollection = collection(db, 'watchlist');
      const documentRef = doc(watchlistCollection, documentId);
      await deleteDoc(documentRef);
      const updatedItems = watchlistItems.filter(item => item.id !== documentId);
      setWatchlistItems(updatedItems);
      alert('Deleted from Watchlist');
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  return (
    <div>
      <ul className='watch'>
      <div className='watchlist'>

        {watchlistItems.map(item => (
          <li key={item.id}>
          <div className='watchli'>
          <img src={item.thumbnailUrl} alt="" />
          <button className='delete__btn' onClick={() => handleDelete(item.id)}>Delete from WatchList</button>

          </div>
          </li>
        ))}
      </div>

      </ul>
      
    </div>
  );
}

export default WatchList