import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { UserAuth } from '../context/AuthContext';

const SavedNft = () => {
  const [nft, setNft] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setNft(doc.data()?.watchList);
    });
  }, [user?.email]);

  const nftPath = doc(db, 'users', `${user?.email}`);
  const deleteNft = async (passedid) => {
    try {
      const result = nft.filter((item) => item.id !== passedid);
      await updateDoc(nftPath, {
        watchList: result,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      {nft?.length === 0 ? (
        <p>
          You don't have any coins saved. Please save a coin to add it to your
          watch list. <Link to='/'>Click here to search pss.</Link>
        </p>
      ) : (
        <table className='w-full border-collapse text-center'>
          <thead>
            <tr className='border-b border-b-secondary h-14'>
              <th className='px-4'>Id</th>
              <th className='text-left'>Name</th>
            </tr>
          </thead>
          <tbody>
            {nft?.map((n) => (
              <tr key={n.id} className='h-[60px] overflow-hidden'>
                <td>
                  <Link to={`/nft/${n.id}`}>
                    <div className='flex items-center'>
                      <div>
                        <p className='hidden sm:table-cell'>{n?.name}</p>
                        <p className='text-gray-500 text-left text-sm'>
                        </p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className='pl-8'>
                  <AiOutlineClose
                    onClick={() => deleteNft(nft.id)}
                    className='cursor-pointer'
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedNft;