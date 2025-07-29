let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K16";
const crew = [
  "Mai Hoàng",
  "Diệu Hiền",
  "Bạch Mai",
  "Hồng Long",
  "Tuấn Anh",
  "Mai Hân",
];

function launchShip(crew) {
  const crewList = crew.join(", ");
  const message = `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewList} đồng hành cùng bạn trong chuyến phiêu lưu ${mission};`
  return message;
}
const launchMessage = launchShip(crew);
console.log(launchMessage);

function calculateDistance(speed, time) {
  const distance = speed * time;
  return distance;
}

const constSpeed = 1000; // km/h
const constTime = 24;     // giờ

const distanceToPlanet = calculateDistance(constSpeed, constTime);

console.log(`Khoảng cách đến hành tinh đó là ${distanceToPlanet} km.`);

function convertTimeToHex(time) {
  const hexTime = time.toString(16);
  return hexTime;
}

const decimalSeconds = 120; 

const hexTimeResult = convertTimeToHex(decimalSeconds);

console.log(`Thời gian ${decimalSeconds} giây (thập phân) chuyển đổi sang thành ${hexTimeResult} (thập lục phân) trên hành tinh bí ẩn.`);

function decryptCode(code) {
  let decrypted = ''; 

  for (let i = 0; i < code.length; i++) {
    const char = code[i]; 
    if (char >= 'a' && char <= 'z') {
      decrypted += char.toUpperCase(); 
    }
    else if (char >= 'A' && char <= 'Z') {
      decrypted += char.toLowerCase(); 
    }

    else {
      decrypted += char;
    }
  }

  return decrypted;
}
const encryptedCode = "K16 Challenge";
const decryptedResult = decryptCode(encryptedCode);
console.log(`Mật mã ban đầu: "${encryptedCode}"`);
console.log(`Mật mã sau khi đã được giải mã: "${decryptedResult}"`);

function returnToEarth() {
  console.log("Chuẩn bị trở về Trái Đất!");
}
-
returnToEarth();