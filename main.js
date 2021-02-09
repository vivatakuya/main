// import "./style.css"

const onClickAdd =()=>{
    // テキストボックスの値を取得し初期化
   const inputText=document.getElementById("add-text").value
   document.getElementById("add-text").value="";
   createIncompleteList(inputText);
}

   const createIncompleteList =(text) =>{

   //divタグの生成
const div=document.createElement("div");
div.className="list-row"

//listタグの生成
const li=document.createElement("li");
li.innerText= text;

// buttonの生成
const completebutton=document.createElement("button");
completebutton.innerText="完了"
completebutton.addEventListener("click",()=>{
// 押されたボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deletebutton.parentNode)

// 完了リストに追加
const addTarget=completebutton.parentNode;
// Todo内容テキストを取得
const text=addTarget.firstElementChild.innerText;
// div以下を初期か
addTarget.textContent=null;
// liタグの生成
const li=document.createElement("li");
li.innerText=text
// ボタンタグの生成
const backButton=document.createElement("button");
backButton.innerText="戻す"
backButton.addEventListener("click",()=>{
// 押された戻すボタンの親タグを完了リストから削除
const deleteTarget =backButton.parentNode;
document.getElementById("complete-list").removeChild(deleteTarget)

// テキスト取得
const text = backButton.parentNode.firstElementChild.innerText;
createIncompleteList(text);
})


// divタグの子要素
addTarget.appendChild(li)
addTarget.appendChild(backButton)
// 完了リストに追加
document.getElementById("complete-list").appendChild(addTarget);

})


const deletebutton=document.createElement("button");
deletebutton.innerText="削除"
deletebutton.addEventListener("click",()=>{
    // 押された親タグを未完了リストから削除
    deleteFromIncompleteList(deletebutton.parentNode)

})

// divに要素を追加
div.appendChild(li)
div.appendChild(completebutton)
div.appendChild(deletebutton)


// 未完了のリストに追加
document.getElementById("incomplete-list").appendChild(div)

}

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList =(target)=>{
document.getElementById("incomplete-list").removeChild(target)
}

// 未完了リストに追加する関数


document
.getElementById("add-button")
.addEventListener("click",()=>onClickAdd());