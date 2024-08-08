document.getElementById('result').addEventListener('click',function main(){
    let number=document.getElementById('yil').value;
    let num=Number(number);

    let kun=365;
    let oy=12;
    let soat=24;

    let result1=num*kun;
    let result2=num*oy;
    let result3=result1*soat;
    switch (true){
        case (num>0):
            document.getElementById('oy').innerHTML=`Siz ${num} yil kiritdingiz !<br>${num} yilda ${result1} kun bor !`;
            document.getElementById('kun').innerHTML=`${num} yilda ${result2} oy bor !`;
            document.getElementById('soat').innerHTML=`${num} yilda ${result3} soat bor !<br><br>Eslatma : 1kun = 24soat <br>1oy = 30kun , 1yil = 365kun`;break;
            case(num<0):
            document.getElementById('oy').innerHTML="Siz manfiy son kiritdingiz !";
        }
})