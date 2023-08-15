import { useState, useEffect } from 'react';
import axios from 'axios';
import { getCurrentUserPlaylists } from '../spotify';
import { catchErrors } from '../utils';
import { SectionWrapper, PlaylistsGrid } from '../Components';

const Playlists = () => {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getCurrentUserPlaylists();
      setPlaylists(data);
    };

    catchErrors(fetchData());
  }, []);


  return (
    <main>
      <SectionWrapper title="Public Playlists" breadcrumb={true}>
        {playlists && (
          <PlaylistsGrid playlists={playlists.items} />
        )}
      </SectionWrapper>
    </main>
  );
};

export default Playlists;