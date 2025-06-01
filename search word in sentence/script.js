const Sentence = prompt ("جمله را وارد نمایید");
const  Word = prompt ("کلمه مورد نظر را وارد نمایید");

const wordindexInSearch = Sentence.search(Word);

if (wordindexInSearch === -1){
    alert("کلمه وجود ندارد");
}else{
      alert("کلمه وجود دارد");
}