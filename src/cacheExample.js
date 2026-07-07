// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';
const wordQuery = 'ocean';

// modify getSuggestions to be async 
const getSuggestions = async () => {
  const endpoint = `${url}${queryParams}${wordQuery}`;
  try {
    // fetch response from endpoint

    // if successful response, get json and render using renderResponse() function

  } catch (error) {
    console.log(error);
  }
}

const renderResponse = (res) => {
    let responseParagraph = document.getElementById('response');
    for(let i = 0; i < 10; i++){
        let newP = document.createElement('P');
        newP.innerHTML = res[i].word;
        responseParagraph.append(newP);
    }
}

getSuggestions();