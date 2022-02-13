import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const url = "https://newsapi.org/v2/top-headlines?country=kr&apiKey=개인키";
    axios.get(url).then((res) => setNews(res.data.articles));
  }, []);

  return (
    <Container>
      {news.map((article, index) => (
        <Article key={index}>
          <a href={article.url} target="_blank">
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.description}</p>
          </a>
        </Article>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 1400px;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Article = styled.article`
  width: 300px;
  padding: 5px;
  border: 1px solid #dcdcdc;
  margin-bottom: 20px;
  a {
    color: #999;
    text-decoration: none;
    h2 {
      font-size: 20px;
      color: #000;
      margin-bottom: 10px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    img {
      width: 300px;
    }
    p {
      font-size: 15px;
      line-height: 1.7;
      color: #333;
    }
  }
`;
