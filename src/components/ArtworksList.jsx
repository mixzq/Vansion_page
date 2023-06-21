import React from "react";
import Artwork from "./Artwork";
import styled from "styled-components";

function ArtworksList(props) {
  const artworks = props.artworks;
  // console.log(artworks);

  return (
    <StyledArtwork>
      <div className="artworks-list">
        {artworks.map((artwork) => (
          <Artwork
            key={artwork.asset_id}
            id={artwork.id}
            title={artwork.public_id}
            imageUrl={artwork.url}
          />
        ))}
      </div>
    </StyledArtwork>
  );
}

export default ArtworksList;

const StyledArtwork = styled.div`
  /* ArtworksList.css */

  .artworks-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    gap: 2vh;
  }
`;
