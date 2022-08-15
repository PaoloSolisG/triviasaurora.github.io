function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    {
      pregunta: "¿EN QUE AÑO SE JUGO EL PRIMER SUPER CLASICO FBC AURORA VS FBC MELGAR?",
      ayuda: "El aurora juega  su primer clasico el 1919",
      ayudaImg: "",
      imagen: 'https://scontent.flim25-1.fna.fbcdn.net/v/t39.30808-6/298628287_588212659645066_819397531558193333_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=lcib2ZwWIn0AX91XvqA&_nc_ht=scontent.flim25-1.fna&oh=00_AT-BipiLaLY2uq-1KinYfjO_fQ_XAtg0kCJI2FZkOeFYvQ&oe=62FF477A',
      respuesta: "1919",  
      distractores: ["2010", "1995", "1952"],
    },
    {
      pregunta: "¿QUÉ AÑO SE JUGÓ EL PARTIDO FBC AURORA VS DINAMO DE MOSCÚ?",
      ayuda: "",
      imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/299119761_5334487020004002_8166194597812103144_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHRSLWxtMO7bFkepz4SRS6Gb1gcFUdZpMhvWBwVR1mkyBpxrB41CsWAXuQq2ce6FN7fa9Vlsa_cjHncMOTDwVDV&_nc_ohc=w_3Ft5LpLIoAX8Xpqu4&_nc_ht=scontent.flim10-1.fna&oh=00_AT_veE_teWQzBWaZ0uzCbMUT5nI0luWwYjCsB4g6-QQzyw&oe=62FFB5E1",
      respuesta: "1964",
      distractores: ["1960", "1961", "1969"],
    },
    {
      pregunta: "¿CUAL FUE EL RESULTADO DEL PRIMER SUPER CLASICO AREQUIPEÑO EN LA PROFESIONAL FBC AURORA VS FBC MELGAR?",
      respuesta: "Fbc Aurora 2-0 Fbc Melgar",
      imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/298936006_5334487073337330_193366434802575570_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHf2eMbZtbXK-wXiAzgghP9qOroCfKBKMqo6ugJ8oEoysN7mOiyExSRZ0Ujglx7ymDYofh99A1yIwlkbzKATR5F&_nc_ohc=vXA7WKcq6MkAX8KfCfH&_nc_ht=scontent.flim10-1.fna&oh=00_AT_dNrl-dg5XPV2nLlQL7BGyybnpDV7KT_tXUIdcHpp7RQ&oe=62FEB3C8",
      distractores: ["Fbc Aurora 0 - 0 Fbc Melgar", "Fbc Aurora 0 - 3 Fbc Melgar", "Fbc Aurora 3-1 Fbc Melgar"],
    },
    {
      pregunta: "¿QUÉ PRESIDENTE  GESTIONÓ LA GIRA DEL FBC AURORA A CENTRO AMERICA?",
      respuesta: "Pedro P. Días",
      imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/299193509_5334487376670633_5437059468073570448_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHwQ794prdFESis7YtQsfGbUyZJfqND3kVTJkl-o0PeRQiJah_irY_MWsZEct_3U1zdR5j4UxNyy4DEDeYOlB2S&_nc_ohc=v-Y-Pu82OqwAX-FMx5s&_nc_ht=scontent.flim10-1.fna&oh=00_AT-eCVtnYDNCIis-JowmfFtZxCRrNlRF95TugciHHRd5jQ&oe=62FFB840",
      distractores: ["Mauricio Marquina", "Jose Luis Sanca", "Jose Luis Cornejo"],  
    },
    {
      pregunta: "¿LA IMAGEN DEL PARTIDO FBC AURORA VS ALFONSO UGARTE CORRESPONDE A?",
      respuesta: "Primer partido Oficial en el estadio de Monumental de la Unsa",
      imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/298793081_5334487273337310_1360197891770289075_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFOxtW-hh77MaQx5UqIJcKwjwVx7laFd4WPBXHuVoV3hUko5GVXiPNB-8J4C5wRWWGgwxdFNL-4jqEqVtY247-S&_nc_ohc=7l4eU-r7vikAX_QTOj7&_nc_ht=scontent.flim10-1.fna&oh=00_AT9tmlA-BEsPqRSNmMfMzr0vGOAtzGXfRrIHz_rQTjMy-g&oe=62FF96D9",
      distractores: ["Final de la Copa Perú 1994 de la Copa Perú", "Partido de Inauguración del Estadio Monumental de la Unsa", "Partido inaugural de la primera etapa del estadio Monumental de la Unas"],  
    },
    {
      pregunta: "¿CUANDO SE JUGO EL PARTIDO,  ALIANZA LIMA VS AURORA Y CUAL FUE  RESULTADO?",
      respuesta: "1989 Ganador: Fbc Aurora 2-1",
      imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/299463418_5334487363337301_7729017846836921125_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHXUQi9IIwL05GIyYBUwuTS43Me5dSfShjjcx7l1J9KGGWysH9YIOSRQbEyW-AaOmvgJkegSGZJ9nPMBcfoW4EW&_nc_ohc=eaw9h4cJskMAX-WSgVV&tn=QD5r8DI_YclZQKYA&_nc_ht=scontent.flim10-1.fna&oh=00_AT9b0j-OiS8yZcN5WLlRNXpixOiDdUkVkEwYIkc-2OntHw&oe=62FEB6BD",
      distractores: ["1982 Ganador: Alianza Lima 2-0", "1987 Ganador: Fbc Alianza Lima 3-0", "1990 Ganador: Fbc Aurora 3-1"],  
    },
    {
      pregunta: "¿CUALES FUERON RESULTADOS DE LAS LLAVE DE LIGUILLA Y CLASIFICADO 1989 FBC AURORA VS SPORTING CRISTAL?",
      respuesta: "Fbc Aurora vs Cristal 2-0 / 1-2 Ganador de Llave: Fbc Aurora",
      imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/298728052_5334487426670628_6361873726473296901_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeElbUcBkpItH4WQ1D4XMCR545SAVUyKmt3jlIBVTIqa3Wkf2n8IZ0DO2WM9n1VVPsnWfOAbaN0R6-pStlJEY5w1&_nc_ohc=LedoGp6SO4YAX9Tk1EE&_nc_ht=scontent.flim10-1.fna&oh=00_AT9jTHUGapIS7w4YSadJWcR-IWSJn_VFVMuD4ki5Zk3imQ&oe=62FEB44A",
      distractores: ["Fbc Aurora vs Cristal 2-1 / 2-0 Ganador de Llave: Fbc Aurora", "Fbc Aurora vs Cristal 3-1 / 0-1 Ganador de Llave: Fbc Aurora", "Fbc Aurora vs Cristal 1-1 / 0-3 Ganador de Llave: Sporting Cristal"],  
    },
    {
      pregunta: "¿AÑO DE LA FAMOSA GIRA A CENTRO AMERICA?",
      respuesta: "1934",
      imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/299134825_5334487540003950_4522202425746184737_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGsaDovOwEK6BVLBauj7gI14rfRTO-F1CXit9FM74XUJaSjLKmxn1fokqFCL1OoyDWulb8OE1EhLZ_74-IATJhC&_nc_ohc=42u9q-KyrdQAX97dP_I&_nc_ht=scontent.flim10-1.fna&oh=00_AT8sTK50vKvG7uG2cyXa0uEhvymM_xEp7zyIACyYzLB7MA&oe=62FE70D9",
      distractores: ["1931", "1939", "1927"],  
    },
    {
      pregunta: "¿CUÁL FUE EL PUESTO OCUPADO EN TORNEO REGIONAL 1989?",
      respuesta: "Tercer Lugar",
      imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/298712153_5334487603337277_7811938233668622581_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGe-3_eaiXeeMR-jwIS2WU2on1NTQgvctOifU1NCC9y04R8ImlE7HWktYvJXrDs3RdTJMAhQUM9WIXz2Tf50akp&_nc_ohc=hJR7dOrse-cAX-sQP1Q&tn=QD5r8DI_YclZQKYA&_nc_ht=scontent.flim10-1.fna&oh=00_AT-wxvteNZw-sjkqNN5d-ddobj59kZUBJ4V8IhDrFJ4Xqw&oe=62FF4D7E",
      distractores: ["Primer Lugar", "Cuarto Lugar", "Setimo Lugar"],  
    },
    {
      pregunta: "¿ QUE PRESIDENTE QUE LLEVÓ A LA PROFESIONAL AL FBC AURORA?",
      respuesta: "Jose Cornejo",
      imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/298798991_5334487610003943_5395043510222615862_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFKfirg25e0UstzjV_BRhas7uiKTFlywTDu6IpMWXLBMIA4hwvGdZynzmmF8SUA-DioLrlq1vnBWqw7wyDYHIpT&_nc_ohc=HLxrjoi-f-sAX80GQtB&_nc_ht=scontent.flim10-1.fna&oh=00_AT-4HAgAgtz9lLARJX2ZMEHXbCy1fhY0Omlfe-pDl1jscw&oe=62FF86A1",
      distractores: ["Pedro P. Diaz", "Jose Luis Sanca ", "Fabio Velarde"],  
    },
  ];