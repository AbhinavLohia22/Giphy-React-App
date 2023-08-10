import React, { useMemo } from "react";
import "../../css/MasonryView.css";

const MasonryGrid = ({ posts }) => {

  const grid = useMemo(() => {

    let columnWrappers = {};

    for (let i = 0; i < 4; i++) {
      columnWrappers[`column${i}`] = [];
    }

    for (let i = 0; i < posts.length; i++) {
      const column = i % 4;
      columnWrappers[`column${column}`].push(posts[i]);
    }

    let grid = [];
    for (let i = 0; i < 4; i++) {
      let columnPosts = columnWrappers[`column${i}`];
      let columnDiv = (
        <div className="column">
          {columnPosts.map((post) => (
            <div key={post.id} className="post">
              <img src={post.url} alt={post.id} loading="lazy" />
            </div>
          ))}
        </div>
      );
      grid.push(columnDiv);
    }

    return grid;
  }, [posts]);

  return (<div className="container">{grid}</div>);
};

export default MasonryGrid;
