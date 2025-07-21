let chieucao = 185;
let chuyendoi_chieucao = chieucao/100;
let sole_chieucao = (chuyendoi_chieucao - Math.trunc(chuyendoi_chieucao))*100;
let cannang_lytuong = (sole_chieucao *9/10).toFixed(2);
let cannang_max = (sole_chieucao).toFixed(2);
let cannang_min = (sole_chieucao*8/10).toFixed(2);


console.log("Cân nặng lý tưởng của bạn là:" + cannang_lytuong + "/ " + "Cân nặng tối đa của bạn là:" + cannang_max + "/ " + "Cân nặng tối thiểu của bạn là:"  + cannang_min);
//console.log("Cân nặng tối đa của bạn là:"  + cannang_max);
//console.log("Cân nặng tối thiểu của bạn là:"  + cannang_min);