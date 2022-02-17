const gridsizeinit = 16;
let gridsizeQS;
let gridsize = 0;
let divgrid;
let divlinha;
let divcoluna;
let fimfor;
let i, z;
let scrollSize;

if (gridsize === 0)
{
    gridsize = gridsizeinit;
    divgrid = document.querySelector(".grid");
    divgrid.style.display = 'grid';
    divgrid.style.gridTemplateColumns = 'repeat(' + gridsize + ', 1fr)';
    divgrid.style.gridTemplateRows = 'repeat(' + gridsize + ', 1fr)';
    divgrid.style.border = '1px';
    divgrid.style.borderStyle = 'groove';
    divgrid.style.width = '500px';
    divgrid.style.height = '500px';

}
else
{
    gridsizeQS = document.querySelector(".scroll-bar");
    gridsize = gridsizeQS.value;
}

scrollSize = document.querySelector(".progress-bar-tamanho");
scrollSize.innerHTML = gridsize + ' x ' + gridsize;
fimfor = gridsize;

for (i = 1; i <= fimfor; i++)
{
    let gridpai = document.querySelector(".grid");
    let colunafilho = document.createElement('colunafilho' + i);
    gridpai.appendChild(colunafilho);
    colunafilho.style.border = '1px';
    colunafilho.style.borderStyle = 'groove';
    colunafilho.style.width = '99%';
    colunafilho.style.height = '99%';
/* */
    for (z = 1; z <= fimfor; z++)
    {
        let linhafilho = document.createElement('linhafilho' + z);
        gridpai.appendChild(linhafilho);
        linhafilho.style.border = '1px';
        linhafilho.style.borderStyle = 'groove';
        linhafilho.style.width = '99%';
        linhafilho.style.height = '99%';
    }
}

function corYellow()
{
    divgrid.style.backgroundColor = 'yellow';
}   

function corRed()
{
    divgrid.style.backgroundColor = 'red';
}   

function corBlue()
{
    divgrid.style.backgroundColor = 'blue';
}   

function corGreen()
{
    divgrid.style.backgroundColor = 'green';
}   

function corBrown()
{
    divgrid.style.backgroundColor = 'brown';
}   

function corPurple()
{
    divgrid.style.backgroundColor = 'purple';
}   

function corWhite()
{
    divgrid.style.backgroundColor = 'white';
}   

function corBlack()
{
    divgrid.style.backgroundColor = 'black';
}   

function limpar()
{
    gridsize = gridsizeinit;
    divgrid = document.querySelector(".grid");
    divgrid.style.display = 'grid';
    divgrid.style.gridTemplateColumns = 'repeat(' + gridsize + ', 1fr)';
    divgrid.style.gridTemplateRows = 'repeat(' + gridsize + ', 1fr)';
    divgrid.style.border = '1px';
    divgrid.style.borderStyle = 'groove';
    divgrid.style.width = '500px';
    divgrid.style.height = '500px';
    divgrid.style.backgroundColor = 'white';    
}

function rangeSlider()
{
    divgrid = document.querySelector(".grid");
    gridsizeQS = document.querySelector(".scroll-bar");
    gridsize = gridsizeQS.value;
    fimfor = gridsize;

    divgrid.style.display = 'grid';
    divgrid.style.gridTtemplateColumns = 'repeat(' + gridsize + ', 1fr)';
    divgrid.style.gridTemplateRows = 'repeat(' + gridsize + ', 1fr)';
    divgrid.style.border = '1px';
    divgrid.style.borderStyle = 'groove';
    divgrid.style.width = '500px';
    divgrid.style.height = '500px';

    for (i = 1; i <= fimfor; i++)
    {
        let gridpai = document.querySelector(".grid");
        let colunafilho = document.createElement('colunafilho' + i);
        gridpai.appendChild(colunafilho);
        colunafilho.style.border = '1px';
        colunafilho.style.borderStyle = 'groove';
        colunafilho.style.width = '99%';
        colunafilho.style.height = '99%';
    /* */
        for (z = 1; z <= fimfor; z++)
        {
            let linhafilho = document.createElement('linhafilho' + z);
            gridpai.appendChild(linhafilho);
            linhafilho.style.border = '1px';
            linhafilho.style.borderStyle = 'groove';
            linhafilho.style.width = '99%';
            linhafilho.style.height = '99%';
        }
    }
    scrollSize = document.querySelector(".progress-bar-tamanho");
    scrollSize.innerHTML = gridsize + ' x ' + gridsize;
}
