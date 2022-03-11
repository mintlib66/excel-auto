const inputBtn = document.querySelector(".inputBtn");

inputBtn.addEventListener("click", ()=>{
    const range = document.querySelector(".inputRange").value;
    const pos = document.querySelector(".inputAlpha").value;
    const num = document.querySelector(".inputNumber").value;
    const rowNum = document.querySelector(".inputRow").value

    console.log(pos);
    let code = ``;

    for(let i=1; i<num; i++){
        codeValue=`=iferror(vlookup("${pos}${i}",${range},${rowNum},false),"")`;
        //codeValue=`=AND(NOT(ISBLANK(${pos}${i})),COUNTIF($C$4:$C$33,${pos}${i})>1)`;
        code+=
        `<tr>
            <td>
                <input class="funcLine" readonly
                value='${codeValue}' style="width:300px">
                <span class="msg"></span>
            </td>
         </tr>
        `;
        
    };
    document.querySelector(".radeTable").innerHTML = code;
    document.querySelectorAll(".funcLine").forEach((line)=>{
        line.addEventListener("click", copyCode);
    })
    document.querySelector(".tutorial").innerHTML = `<small>각 칸을 클릭하면 복사됩니다.</small>`;
});

function copyCode(){
    const copyLine = (this.value);
    this.select();
    document.execCommand('copy');

    console.log("copy:"+copyLine);
};
