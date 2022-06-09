import React from 'react'
import { useEffect, useState } from 'react'

const NewsContainer = () => {
    const [container, setContainer] = useState([]);
    const [articles, setArticles] = useState('protest')
    const [myValue, setmyValue] = useState('')

    // ===== Fetch Data ========
    
    useEffect(() => {
        const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': 'c4880e6816msh72c0f1da6b045a3p1d2cdcjsnce667af61f88',
              'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
          }
      };
        const getArticle = () =>{
         fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=+${articles}&pageNumber=1&pageSize=10&autoCorrect=true`, options)
        .then(response => response.json())
        .then(data => setContainer(data.value))
        .catch(err => console.error(err));
        };


        getArticle()
    }, [articles])

    // ========Input data section ===========
    const onChangeHandler = (e) => {
        setmyValue(e.target.value)
    }
    // =======OnSubmit trigger ========
    const onSubmitHandler = (e) => {
       e.preventDefault()
       setArticles(myValue)
    }
    return (
        
        <div className='blogs'>
        <div className="header_container">
            <div className="header">
               <h2>Latest <span>News</span></h2>
               <div className="line"></div>
            </div>
             <form action="" className='form' onSubmit={onSubmitHandler}>
                 <input type="text" value={myValue} onChange={onChangeHandler}      placeholder="search" />
                 <input type="submit" value='Enter' />
             </form>
        </div>

        <div className='news_container'>
            {container ? container.map(item => (
                <div className='news_content'>
                    <img src={item.url} alt='news img'/>
                    <div className="text-content">
                      <h3 className='title'>{item.title}</h3>
                    </div>
                    <div className="overlay">
                        <p><a href={item.webpageUrl}>Read More...</a></p>
                    </div>
                </div>
            )) : <p> No News Available</p>}
            
        </div>
        </div>
    )
}

export default NewsContainer