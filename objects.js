let models = {};
let rotorin = [0,1,0];

const useFrameLimit = true;

const models_oxygen_fstart = 0;
const models_oxygen_fend = 99999;

const models_tonnel2_fstart = 173;
const models_tonnel2_fend = 265;//265

const models_tonnel3_fstart = 215; //230
const models_tonnel3_fend = 345;

const models_rotor_fstart = 315;
const models_rotor_fend = 600;


const models_tonnel4_fstart = 500;
const models_tonnel4_fend = 723;


const models_tonnel5_fstart = 1190;
const models_tonnel5_fend = 1340+10;

function init_models() {
  //init_testcube();
  init_tonnel5();
  
  init_tonnel4();
  init_rotor();
  init_tonnel3();
  init_tonnel2(); //tonnel-2 + squad
  
}

function show_models_stat() {
  total_v = 0;
  total_f = 0;
  for (m in models) {
    console.log(m + ', v:' + models[m].v.length + ' f:' + models[m].f.length);
    total_v += models[m].v.length;
    total_f += models[m].f.length;
  }
  console.log('total v:' + total_v + ', f:' + total_f);
}

function vSub(v1,v2) {
  return [
    v1[0] - v2[0],
    v1[1] - v2[1],
    v1[2] - v2[2],
  ];
}

function vecHalf(v1,v2) {
  return [
    (v1[0]+v2[0])/2,
    (v1[1]+v2[1])/2,
    (v1[2]+v2[2])/2,
  ];
}

function init_rotor() {
  modelRenderList.push({
    model: 'rotor',
    campath: 'rotor',
  });
  modelRenderList.push({
    model: 'rotorin',
    campath: 'rotor',
  });  
  
  let model = {
		fstart: useFrameLimit ? models_rotor_fstart : 0,
		fend: useFrameLimit ? models_rotor_fend : 9999,
    v: [],
    f: [],
  }
  let model2 = {
		fstart: useFrameLimit ? models_rotor_fstart : 0,
		fend: useFrameLimit ? models_rotor_fend : 9999,
    v: [],
    f: [],
  }

  let colors = [
    ['#7F7F0F','#2F2F1F','#7F7F0F', '#ff0000'], //r
    ['#4F4F3F','#4F4F3F','#3F3F2F', '#ff0000'], //forv
    ['#7F7F0F','#2F2F1F','#7F7F0F', '#ff0000'], //r
    ['#2F2F1F','#1F1F0F','#2F2F1F', '#ff0000'], //back
  ];

  let nqty = 6;
  let sz = 1.15;
  let r1 = 2;
  let r2 = r1 - 0.25;
  let rlist = [r1, r2];

  for (n = 0; n < nqty; n++) {
    let clr = n%2 == 0 ? 2 : 1;
    if (n >= nqty-2) {
      // clr = 0;
    }
    let aa = 0;
    let alist = [0, 2, -2, 0];
    for (a = 0; a < 360; a += 360/8) {
      let rr1 = rlist[aa%2];
      let rr2 = rlist[(aa%2)^1];
      let al = 2*(aa%2);
      let L1 = (a+alist[al]) * Math.PI / 180;
      let L2 = (a+alist[al+1]) * Math.PI / 180;
      model.v.push([ rr1 * Math.cos(L1), rr1 * Math.sin(L1), n*sz - sz*3 ]);
      model.v.push([ rr2 * Math.cos(L2), rr2 * Math.sin(L2), n*sz - sz*3 ]);
      aa++;
    }
    let nn = n * 16;
    if (n < nqty-1) {
      for (let i = 0; i < 16; i++) {
        let ci = i % 4;
        let clr1 = clr;
        //let clr1 = i == 1 ? 3 : clr;
        let v1 = 2+i <= 16 ? 2+i : 1;
        let v2 = 18+i <= 32 ? 18+i : 17;
        if (!(i==3 && n ==0)) {
          model.f.push([colors[ci][clr1], nn+1+i, nn+17+i, nn+v2]);
          model.f.push([colors[ci][clr1], nn+v2, nn+v1, nn+1+i]);
        }
      }
    }
  }

  //4,5,20,21
  let colors3 = ['#4F4F3F','#2f2f1f','#1F1F0F','#2f2f1f'];
  let dd1 = 0.75;
  let dd2 = 0.35;
  let nn = model.v.length;
  let center = vecHalf(model.v[4-1], model.v[21-1]);
  let llist = [4-1,20-1,21-1,5-1];
  for (l in llist) {
    let point = model.v[llist[l]];
    let dir = normalize([point[0], point[1], 0]);
    let dir2 = vSub(center, point);
    let point2 = [
      point[0] + dd1*dir[0] + dd2*dir2[0],
      point[1] + dd1*dir[1] + dd2*dir2[1],
      point[2] + dd1*dir[2] + dd2*dir2[2],
    ];
    model.v.push(point2);
  }

  model.f.push([colors3[0], 4, 20, nn+2]);
  model.f.push([colors3[0], nn+2, nn+1, 4]);
  model.f.push([colors3[1], 20, 21, nn+3]);
  model.f.push([colors3[1], nn+3, nn+2, 20]);
  model.f.push([colors3[2], 21, 5, nn+4]);
  model.f.push([colors3[2], nn+4, nn+3, 21]);
  model.f.push([colors3[3], 5, 4, nn+1]);
  model.f.push([colors3[3], nn+1, nn+4, 5]);



  model.f.push([colors[3][1], 3, 4, 5]);
  model.f.push([colors[3][1], 5, 6, 3]);
  model.f.push([colors[3][1], 7, 8, 9]);
  model.f.push([colors[3][1], 9, 10, 7]);
  model.f.push([colors[3][1], 11, 12, 13]);
  model.f.push([colors[3][1], 13, 14, 11]);
  model.f.push([colors[3][1], 15, 16, 1]);
  model.f.push([colors[3][1], 1, 2, 15]);  
  
  //inner
  let colors2 = [
    ['#5F5F4F','#3F3F2F','#6F6F5F','#7F7F0F'],
    ['#4F4F3F','#2F2F1F','#5F5F4F','#3F3F2F'],
  ];
  
  let nqty2 = 10;
  let xr1 = 0.35;
  let xr2 = 0.6;
  let xlist = [
    {z:0,r:xr1},
    {z:1,r:xr1},
    {z:1,r:xr2},
    {z:2,r:xr2},
    {z:2,r:xr1},
    {z:3,r:xr1},
    {z:3,r:xr2},
    {z:4,r:xr2},
    {z:4,r:xr1},
    {z:5,r:xr1}
  ];
  for (n = 0; n < nqty2; n++) {
    for (a = 0; a < 360; a += 360/8) {
      let L = a * Math.PI / 180;
      let r = xlist[n].r;
      model2.v.push([ r * Math.cos(L), r * Math.sin(L), xlist[n].z*sz - sz*3 ]);
    }
    let nn = n * 8;
    if (n < nqty2-1) {
      for (let i = 0; i < 8; i++) {
        let v1 = 2+i <= 8 ? 2+i : 1;
        let v2 = 10+i <= 16 ? 10+i : 9;
        model2.f.push([colors2[i%2][n%4], nn+1+i, nn+v1, nn+v2]);
        model2.f.push([colors2[i%2][n%4], nn+v2, nn+9+i, nn+1+i]);
      }
    }
  }

  // modify
  for (v in model.v) {
    model.v[v] = rotX(model.v[v], 90);
    model.v[v] = rotY(model.v[v], -360/16);
    model.v[v] = rotY(model.v[v], -360/4);
  }
  for (v in model2.v) {
    model2.v[v] = rotX(model2.v[v], 90); 
    model2.v[v] = rotY(model2.v[v], -360/16);
    model2.v[v] = rotY(model2.v[v], -360/4);
  }

  models['rotor'] = model;
  models['rotorin'] = model2;
  
  //rotor cam
  camPathList['rotor'] = [];

  //315
  picoEye = [0.12493943061155013, 2.811982324716844, -3.260394806604835];
  picoDir = [0.48544951487361176, 0.1469226637329067, 0.8618308995334306];
  picoUp = [-0.23769876631118914, 0.9709851993862086, -0.026211430084283553];
  camMovDir(-0.1);
  camPathList['rotor'].push({"frame":-1, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  camMovDir(0.1);
  camPathList['rotor'].push({"frame":315, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  //330
  picoEye = [0.305429895399044, 1.6746254004712695, -2.8266204394537895];
  picoDir = [0.3483413317121603, 0.24865517806046772, 0.9037858811935036];
  picoUp = [-0.2813559973992302, 0.9473379752418875, -0.15293646848311082];
  camPathList['rotor'].push({"frame":330, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  //350
  resetCam();
  camMovVec(rotorin, 2);
  camRotDir(15);
  camPathList['rotor'].push({"frame":350, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  //360
  picoEye = [0.18956817506316442, 2.0029054671343456, -1.6754890954477335];
  picoDir = [-0.19684375951084995, -0.07666503985926991, 0.9774328652163335];
  picoUp = [-0.30675713916057445, 0.9515927910151917, 0.019267009678143848];
  camPathList['rotor'].push({"frame":360, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  //380
  picoEye = [0.9562437886072557, 1.8016091873536535, -1.0856061984780663];
  picoDir = [-0.41487688453301025, -0.30959937023477446, 0.8555848295934275];
  picoUp = [-0.5065084571259862, 0.8597620240271271, 0.06525676134034457];

  picoEye = [0.9562437886072557, 1.8016091873536535, -1.0856061984780663];
  picoDir = [-0.4348732541541764, -0.274848778144034, 0.8575216626850245];
  picoUp = [-0.48944638047159683, 0.8714869126878078, 0.03086748543574832];
  camPathList['rotor'].push({"frame":380, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  //390
  picoEye = [1.233203970761894, 1.5079468438455277, -0.5209284866351637];
  picoDir = [-0.5002794325986561, -0.42274534879886366, 0.7556499582397221];
  picoUp = [-0.5968280728081955, 0.7986696279818724, 0.07696152835899871];
  camPathList['rotor'].push({"frame":390, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  //410
  picoEye = [1.2065398154189535, 0.679858966946426, 0.21841141189872626];
  picoDir = [-0.6122680634339003, -0.6597292715324093, 0.4357580828650439];
  picoUp = [-0.7370239193412177, 0.6755340801859873, 0.02120020816364129];
  camPathList['rotor'].push({"frame":410, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  //420
  picoEye = [1.0169727510860445, 0.14323966903352575, 0.5490028577338081];
  picoDir = [-0.6805081772887165, -0.7237190724496315, 0.11462689394655122];
  picoUp = [-0.7621660756848956, 0.6442152550203605, -0.06394981058719398];
  camPathList['rotor'].push({"frame":420, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  //430
  //picoEye = [0.6356926642937349, -0.2938980186351984, 0.5644974471545317];
  //picoDir = [-0.6385717972073157, -0.7328896620577133, -0.23473134230509696];
  //picoUp = [-0.7245329342042289, 0.6753637435081563, -0.13760756232147928];
  picoEye = [0.4863491134299662, -0.2938980186351984, 0.6972998430709243];
  picoDir = [-0.5661310640058796, -0.7328896620577123, -0.37731732217922787];
  picoUp = [-0.6723901841021994, 0.6753637435081563, -0.3029443088715483];
  camPathList['rotor'].push({"frame":430, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  //450
  picoEye = [-0.2619685334717981, -0.5899537194456943, 0.7369350299785382];
  picoDir = [0.02200347513450028, -0.6470795739103173, -0.7621048957394564];
  picoUp = [-0.1898350265275319, 0.8407531309567344, -0.5070471728446374];
  camPathList['rotor'].push({"frame":450, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  //470
  picoEye = [-0.8780284817988329, -1.045421494859839, 0.7110086029607725];
  picoDir = [0.1921362545227356, -0.2860336137924592, -0.938758984765952];
  picoUp = [-0.13211822110794902, 0.988894153409815, 0.06806709192522019];
  camPathList['rotor'].push({"frame":470, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  //490
  picoEye = [-0.9689632610029416, -1.660665737918407, -0.07703958139989273];
  picoDir = [0.4258589651331985, -0.0030966168304646796, -0.9047842575884524];
  picoUp = [0.050073305687805374, 0.8640200169113372, 0.5009611506235079];
  camPathList['rotor'].push({"frame":490, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  //520
  picoEye = [-0.3731060916340098, -2.685050606424624, -1.1774316217475562];
  picoDir = [0.6958355527248758, 0.2233865035364816, 0.6825769946327023];
  picoUp = [-0.19241684110712187, 0.9616206339340687, 0.19560551027666997];
  camPathList['rotor'].push({"frame":520, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  //540
  picoEye = [0.16298921581086195, -2.9204977902665203, -1.150442706541002];
  picoDir = [0.14932502958634442, 0.12285672668445768, 0.9811260164970746];
  picoUp = [-0.31280795301605085, 0.9471593967026618, -0.07099480099104304];
  camPathList['rotor'].push({"frame":540, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  //550
  picoEye = [0.329657084320371, -3.0373286068254575, -0.9196913921830118];
  picoDir = [-0.040292989007964373, 0.11975129302723113, 0.9919859388394124];
  picoUp = [-0.3092411612356124, 0.9425533950231078, -0.12634477325185817];
  camPathList['rotor'].push({"frame":550, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  //575
  picoEye = [0.6944578490625232, -2.928953834120747, 0.3144789464349414];
  picoDir = [0.5204629687228612, 0.13819060584100684, 0.8426278268876963];
  picoUp = [-0.3094357696643162, 0.9502654762525795, 0.03528496981308845];
  camPathList['rotor'].push({"frame":575, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  picoEye = [0.9772453416286452, -2.8548832522156995, 0.7844749098076782];
  picoDir = [0.6268700242271048, 0.1700915520900256, 0.7603307416073054];
  picoUp = [-0.3092874938033647, 0.9500734923322728, 0.04125051932270093];
  camPathList['rotor'].push({"frame":585, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});  

  picoEye = [1.7545641716702525, -2.643969727624065, 1.7272850294007378];
  picoDir = [0.6268700242271049, 0.17009155209002563, 0.7603307416073055];
  picoUp = [-0.3092874938033647, 0.9500734923322728, 0.04125051932270093];
  camPathList['rotor'].push({"frame":600, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  camMovDir(0.1);
  camPathList['rotor'].push({"frame":-1, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

}

function init_tonnel5() {
  modelRenderList.push({
    model: 'tonnel5',
    campath: 'tonnel5',
  });
  let model = {
		fstart: useFrameLimit ? models_tonnel5_fstart : 0,
		fend: useFrameLimit ? models_tonnel5_fend : 9999,
    v: [],
    f: [],
  }

  let colors = [
    [
      '#3F4F5F','#7F7F0F','#4F5F6F','#3F4F5F','#2F3F4F',
      '#1F2F3F','#0F1F2F','#0F0F1F','#1F2F3F','#7F7F0F'
    ],[
      '#2F3F4F','#0F0F1F','#3F4F5F','#2F3F4F','#1F2F3F',
      '#0F1F2F','#0F0F1F','#000000','#0F1F2F','#0F0F1F'
    ]
  ];
  colors[0] = changeColors(colors[0]);
  colors[1] = changeColors(colors[1]);

  let nqty = 16;
  let sx = 1.5;
  let sy = 0.7;
  
  let d1 = 0.685;
  let dx2 = 0.8;
  let dy2 = 0.275;
  let d3 = 0;
  let d4 = 0.7;
  let d5 = 0.685;
  
  let mDz = 1.5;
  let mRot = -15;
  let mRotF = 25;
  
  for (let n = 0; n < nqty; n++) {
    let points = [
      [-sx*d1, -sy, 0],
      [-sx*dx2, -sy*dy2, 0],
      [-sx, -sy*d3, 0],
      [-sx, sy*d4, 0],
      [-sx*d5, sy, 0],

      [sx*d5, sy, 0],
      [sx, sy*d4, 0],
      [sx, -sy*d3, 0],
      [sx*dx2, -sy*dy2, 0],
      [sx*d1, -sy, 0],
    ];
    for (p in points) {
      model.v.push(points[p]);
    }

    // modify points
    for (v in model.v) {
      model.v[v][2] += mDz;
      if (n < 6) {
        model.v[v][2] += 0.5*mDz;
      }

      if (n == 6 || n == 7) {
        model.v[v] = rotX(model.v[v], mRot/2);
      }
      if (n > 7) {
        model.v[v] = rotX(model.v[v], mRot);
      }
    }

    // push polygons
    if (n < nqty - 1) {
      let nn = n*10;
      clr = n%2 == 0 ? 0 : 1;
      model.f.push([colors[clr][0], nn+1, nn+10, nn+20]);
      model.f.push([colors[clr][0], nn+20, nn+11, nn+1]);      
      for (let i = 0; i < 9; i++) {
        model.f.push([colors[clr][1+i], nn+2+i, nn+1+i, nn+11+i]);
        model.f.push([colors[clr][1+i], nn+11+i, nn+12+i, nn+2+i]);
      }
    }
  }

  for (v in model.v) {
    //model.v[v][2] -= 1;
    //model.v[v] = rotX(model.v[v], mRotF);
    //model.v[v][2] -= 1.65;
    //model.v[v][1] -= 0.2;
  }

  models['tonnel5'] = model;
  
  // cam path tonnel5
  camPathList['tonnel5'] = [];
  let len = 1340-1190; //(150)
  let frm = 0;
  const frmStep = 11;
  for (let n = 0; n < nqty-1; n++) {
    let nn = (nqty-n-2)*10;
    
    let upp = normalize(vSub(model.v[nn+4-1], model.v[nn+3-1]));
    let hrz = normalize(vSub(model.v[nn+6-1], model.v[nn+5-1]));
    picoDir = normalize(cross(hrz, upp));
    picoUp = normalize(upp);
    picoEye = [
      (model.v[nn+3-1][0] + model.v[nn+8-1][0]) / 2,
      (model.v[nn+3-1][1] + model.v[nn+8-1][1]) / 2,
      (model.v[nn+3-1][2] + model.v[nn+8-1][2]) / 2,
    ];
    if (n==0) {
      camMovDir(-1.9);
      camRotDir(17);
      camRotUp(4);
      camRotH(8);
      camMovUp(0.2);
    }
    if (n==1) {
      camMovDir(-1.9);
      camRotDir(17);
      camRotUp(4);
      camRotH(6);
      camMovUp(0.4);
      camMovDir(0.5);
    }
    if (n==2) {
      camMovDir(-1.9);
      camRotDir(17);
      camRotUp(4);
      camRotH(0);
      camMovUp(0.4);
      camMovDir(0.5);
    }
    if (n==3) {
      camMovDir(-1.9);
      camRotDir(17);
      camRotUp(4);
      camRotH(0);
      camMovUp(0.4);
      camMovDir(0.5);
    }
    if (n==4) {
      camMovDir(-1.9);
      camRotDir(17);
      camRotUp(4);
      camRotH(0);
      camMovUp(0.2);
      camMovDir(0.5);
    }
    
    if (n > 4) {
      camMovDir(-1.9);
      camRotDir(17);
      camRotUp(4);
      camRotH(0);
      camMovUp(0.0);
      camMovDir(0.5);
    }
    
    if (n >= 6) {
      picoUp = camPathList['tonnel5'][camPathList['tonnel5'].length-1].picoUp;
      picoDir = camPathList['tonnel5'][camPathList['tonnel5'].length-1].picoDir;
    }
    if (n >= 6) {
      //camMovUp(-0.05 * (n-6));
      camMovDir(-0.05 * (n-6));
      camRotUp(2.5);
    }
    if (n >= 8) {
      camRotDir(-2.0);
    }
    if (n >= 10) {
      camRotH(-5);
      camRotUp(0.5);
    }
    if (n == 0) {
      camMovDir(-0.1);
      camPathList['tonnel5'].push({"frame":-1, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
      camMovDir(0.1);
    }
    camPathList['tonnel5'].push({"frame":1190+frm, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
    frm += frmStep;
  }
  
  let vdir = normalize(vSub(camPathList['tonnel5'][camPathList['tonnel5'].length-1].picoEye, camPathList['tonnel5'][camPathList['tonnel5'].length-2].picoEye));
  picoEye[0] += vdir[0];
  picoEye[1] += vdir[1];
  picoEye[2] += vdir[2];
  camRotH(-5);
  camPathList['tonnel5'].push({"frame":1190+frm+frmStep, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  camPathList['tonnel5'].push({"frame":-1, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
}

function init_tonnel3() {
  modelRenderList.push({
    model: 'tonnel3',
    campath: 'tonnel2',// 'tonnel3',
  });

  let model = {
		fstart: useFrameLimit ? models_tonnel3_fstart : 0,
		fend: useFrameLimit ? models_tonnel3_fend : 9999,
    v: [],
    f: [],
  }
  
  let nqty = 4;
  let sx = 2.0;
  let sy = 0.75;
  let sz = 4;
  let bsz = 0.5;
  
  let dd = 0.275;
  let uu = 0.125;
  let ddd = 0.5;
  let uuu = 0.1;
  let uuu1 = 0.075;

  let mDx = sx*5.0;
  let mDy = sx*1.0;
  let mA1 = 22;
  let mA2 = 2;
  let mA3 = 5;
  let mRz = 8;
  
  colors = [
    [
      '#5F4F4F', '#4F3F3F', '#3F2F2F',
      '#2F1F1F', '#7F7F0F',
      '#6F5F5F', '#5F4F4F',
      '#2F1F1F', '#3F2F2F', '#4F3F3F', '#5F4F4F', '#6F5F5F',
      '#3F2F2F', '#4F3F3F', '#5F4F4F', '#6F5F5F', '#7F6F6F',
      
    ],[
      '#4F4F3F', '#3F3F2F', '#2F2F1F',
      '#2F1F1F', '#7F7F0F',
      '#5F5F4F', '#4F4F3F',
      '#1F1F0F', '#2F2F1F', '#3F3F2F', '#4F4F3F', '#5F5F4F',
      '#2F2F1F', '#3F3F2F', '#4F4F3F', '#5F5F4F', '#6F6F5F',
    ]
  ];

  camPathList['tonnel3'] = [];

  picoEye = [-0.8182420986748542, -0.29062341243165724, -4.4119376628131795];
  picoDir = [-0.7439393866881508, -0.31923433506859183, 0.5870635640604618];
  picoUp = [-0.11900897610965751, 0.9273891844788019, 0.3546634519048639];
  picoEye = [-1.7801733510084925, -0.34392629268699343, -5.652868375328305];
  picoDir = [-0.6634050935765127, -0.33924857250040585, 0.6669363446935362];
  picoUp = [-0.11747780304519831, 0.9271534892668756, 0.35578838251400363];
  camMovDir(-0.1);
  camPathList['tonnel3'].push({"frame":-1, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  camPathList['tonnel3'].push({"frame":230, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  
  picoEye = [-0.11081032230069038, 0.1621182017924546, -5.5739725987201965];
  picoDir = [-0.72993551188593, -0.31745993623084895, 0.6053208548993921];
  picoUp = [-0.09462810825391108, 0.9236277028409792, 0.3714261537277387];
  camPathList['tonnel3'].push({"frame":240, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  
  picoEye = [0.15108805282764132, 0.3158241187087269, -4.025539460421117];
  picoDir = [-0.48988339898348965, -0.35645459160962334, 0.7955843007003092];
  picoUp = [-0.08882958925187798, 0.9279606442037327, 0.3619369377147572];
  camPathList['tonnel3'].push({"frame":255, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  
  
  picoEye = [0.7554011580242874, 0.43243759594506775, -3.5538523759236464];
  picoDir = [-0.47643155796691744, -0.32984807624993634, 0.8149927712363049];
  picoUp = [-0.07487928293271544, 0.9385380463469623, 0.3369561225838016];
  camPathList['tonnel3'].push({"frame":260, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  
  picoEye = [0.1834417157125638, 1.0302207382329638, -3.0842940410740294];
  picoDir = [-0.1793347031899026, -0.2435789874129799, 0.9531570390668356];
  picoUp = [-0.04061091009926922, 0.9697061296997466, 0.24087502154363702];
  camPathList['tonnel3'].push({"frame":265, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  
  
  picoEye = [-0.06718303398527865, 0.03999999999999998, -1.4435166996832427];
  picoDir = [-0.21132479645538899, 0, 0.9774158942860958];
  picoUp = [0, 1, 0];
  picoEye = [-0.07528025162854733, 0.0023770992554984875, -1.406065584826991];
  picoDir = [-0.20970434478983216, 0.12360147674049266, 0.9699210084969995];
  picoUp = [0.026120056913770073, 0.9923319378854888, -0.12081004792339083];
  camPathList['tonnel3'].push({"frame":272, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  picoEye = [-0.30598005397986805, 0.03999999999999998, -0.3390367391399551];
  picoDir = [-0.21132479645538899, 0, 0.9774158942860958];
  picoUp = [0, 1, 0];
  //camPathList['tonnel3'].push({"frame":277, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  picoEye = [-0.6193606275118955, -0.12684675901290243, 1.3174718397112632];
  picoDir = [-0.3534270836006363, 0.1530375805469429, 0.9228590333945303];
  picoUp = [0, 0.9865721616069695, -0.1633259622416223];
  //camPathList['tonnel3'].push({"frame":285, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  picoEye = [-1.804354578929214, 0.28226430843378136, 4.547565758933419];
  picoDir = [-0.615510802711745, 0.19924050494728418, 0.7625284735231169];
  picoUp = [0, 0.9739759672790517, -0.2266513074368552];
  camPathList['tonnel3'].push({"frame":300, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  
  picoEye = [-3.811842109674175, 1.1825834544576832, 6.976862602438046];
  picoDir = [-0.7828435715133802, 0.26176466536299364, 0.5644778140082879];
  picoUp = [0, 0.9414705448120377, -0.3370952584230825];
  //camPathList['tonnel3'].push({"frame":315, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  
  picoEye = [-5.728650436362118, 1.5415470277654413, 7.969150459874183];
  picoDir = [-0.868298849657964, 0.24594325287849586, 0.43077723250678046];
  picoUp = [0, 0.953190667792947, -0.30236989075044496];
  //camPathList['tonnel3'].push({"frame":330, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  
  picoEye = [-7.917669572509831, 1.8741860903599386, 8.619666991434878];
  picoDir = [-0.9659035291590949, 0.2517437892575516, 0.06046020946254634];
  picoUp = [0, 0.925209718385782, -0.37945615952900547];
  camPathList['tonnel3'].push({"frame":345, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  camPathList['tonnel3'].push({"frame":-1, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  for (let n = 0; n < nqty; n++) {
    // create points
    let points = [
      [-sx+dd, -sy, 0], //1-8
      [-sx, -sy+dd, 0],
      [-sx, sy-uu, 0],
      [-sx+uu, sy, 0],
      [sx-uu, sy, 0],
      [sx, sy-uu, 0],
      [sx, -sy+dd, 0],
      [sx-dd, -sy, 0],
      
      [-sx+dd, -sy, 0],
      [-sx, -sy+dd, 0],
      [-sx, sy-uu, 0],
      [-sx+uu, sy, 0],
      [sx-uu, sy, 0],
      [sx, sy-uu, 0],
      [sx, -sy+dd, 0],
      [sx-dd, -sy, 0],
      
      [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0],

      [-sx+dd+ddd, -sy+uuu, 0],
      [-sx+ddd, -sy+dd+uuu, 0],
      [-sx+ddd, sy-uu-uuu1, 0],
      [-sx+uu+ddd, sy-uuu1, 0],
      [sx-uu-ddd, sy-uuu1, 0],
      [sx-ddd, sy-uu-uuu1, 0],
      [sx-ddd, -sy+dd+uuu, 0],
      [sx-dd-ddd, -sy+uuu, 0],

      [-sx+dd+ddd, -sy+uuu, 0],
      [-sx+ddd, -sy+dd+uuu, 0],
      [-sx+ddd, sy-uu-uuu1, 0],
      [-sx+uu+ddd, sy-uuu1, 0],
      [sx-uu-ddd, sy-uuu1, 0],
      [sx-ddd, sy-uu-uuu1, 0],
      [sx-ddd, -sy+dd+uuu, 0],
      [sx-dd-ddd, -sy+uuu, 0],

    ];
    // modify points
    let mRx = 5;
    for (let p in points) {
      points[p][0] += mDx;
      points[p][1] += mDy;
      let alpha = n*mA1;
      let alpha2 = n*mRx;
      if (p >= 8) {
        alpha = (n+1)*mA1 - mA2;
        alpha2 = (n+1)*mRx;
        if (p >= 28) {
          alpha = (n+1)*mA1;
        }
      }
      if (points[p][0] > 0 && alpha > 0) {
        alpha -= mA3;
      }
      points[p] = rotY(points[p], -alpha);
      points[p][0] -= mDx;
      points[p] = rotX(points[p], alpha2);
      points[p][1] -= mDy;
      points[p] = rotZ(points[p], mRz);
      
      
      if (points[p][2] == 0) {
        points[p][2] -= 0.25; //немного не хватает in для сцены
      }
    }

    points[16] = vecHalf(points[2-1], points[10-1]);
    points[17] = vecHalf(points[1-1], points[9-1]);
    points[18] = vecHalf(points[8-1], points[16-1]);
    points[19] = vecHalf(points[7-1], points[15-1]);

    // push points
    for (let p in points) {
      model.v.push(points[p]);
    }
    // push polygons
    let nn = n*36;
    clr = n%2 == 0 ? 0 : 1;

    model.f.push([colors[clr][0], nn+2, nn+3, nn+11]);
    model.f.push([colors[clr][0], nn+11, nn+10, nn+2]);
    model.f.push([colors[clr][1], nn+3, nn+4, nn+12]);
    model.f.push([colors[clr][1], nn+12, nn+11, nn+3]);
    model.f.push([colors[clr][2], nn+4, nn+5, nn+13]);
    model.f.push([colors[clr][2], nn+13, nn+12, nn+4]);
    model.f.push([colors[clr][1], nn+5, nn+6, nn+14]);
    model.f.push([colors[clr][1], nn+14, nn+13, nn+5]);
    model.f.push([colors[clr][0], nn+6, nn+7, nn+15]);
    model.f.push([colors[clr][0], nn+15, nn+14, nn+6]);
    
    model.f.push([colors[clr][3], nn+18, nn+1, nn+2]);
    model.f.push([colors[clr][4], nn+2, nn+17, nn+18]);
    model.f.push([colors[clr][4], nn+9, nn+18, nn+17]);
    model.f.push([colors[clr][3], nn+17, nn+10, nn+9]);

    model.f.push([colors[clr][3], nn+20, nn+7, nn+8]);
    model.f.push([colors[clr][4], nn+8, nn+19, nn+20]);
    model.f.push([colors[clr][4], nn+15, nn+20, nn+19]);
    model.f.push([colors[clr][3], nn+19, nn+16, nn+15]);

    model.f.push([colors[clr][5], nn+1, nn+18, nn+19]);
    model.f.push([colors[clr][5], nn+19, nn+8, nn+1]);
    model.f.push([colors[clr][6], nn+18, nn+9, nn+16]);
    model.f.push([colors[clr][6], nn+16, nn+19, nn+18]);

    model.f.push([colors[clr][10], nn+10, nn+22, nn+21]);
    model.f.push([colors[clr][10], nn+21, nn+9, nn+10]);

    model.f.push([colors[clr][9], nn+11, nn+23, nn+22]);
    model.f.push([colors[clr][9], nn+22, nn+10, nn+11]);

    model.f.push([colors[clr][8], nn+12, nn+24, nn+23]);    
    model.f.push([colors[clr][8], nn+23, nn+11, nn+12]);

    model.f.push([colors[clr][7], nn+13, nn+25, nn+24]);    
    model.f.push([colors[clr][7], nn+24, nn+12, nn+13]);

    model.f.push([colors[clr][8], nn+14, nn+26, nn+25]);    
    model.f.push([colors[clr][8], nn+25, nn+13, nn+14]);

    model.f.push([colors[clr][9], nn+15, nn+27, nn+26]);    
    model.f.push([colors[clr][9], nn+26, nn+14, nn+15]);

    model.f.push([colors[clr][10], nn+16, nn+28, nn+27]);
    model.f.push([colors[clr][10], nn+27, nn+15, nn+16]);
    
    model.f.push([colors[clr][11], nn+9, nn+21, nn+28]);
    model.f.push([colors[clr][11], nn+28, nn+16, nn+9]);

    // border-h
    model.f.push([colors[clr][12], nn+24, nn+25, nn+33]);
    model.f.push([colors[clr][12], nn+33, nn+32, nn+24]);
    for (let i = 1; i < 4; i++) {
      model.f.push([colors[clr][12+i], nn+24+i, nn+25+i, nn+33+i]);
      model.f.push([colors[clr][12+i], nn+33+i, nn+32+i, nn+24+i]);
      model.f.push([colors[clr][12+i], nn+24-i, nn+25-i, nn+33-i]);
      model.f.push([colors[clr][12+i], nn+33-i, nn+32-i, nn+24-i]);
    }
    model.f.push([colors[clr][16], nn+21, nn+29, nn+36]);
    model.f.push([colors[clr][16], nn+36, nn+28, nn+21]);

  }


  // model to model
  for (let v in model.v) {
    model.v[v] = rotY(model.v[v], 100);
    model.v[v] = rotX(model.v[v], 9);
    model.v[v] = rotZ(model.v[v], 6);
    model.v[v][0] += 13.9 -0.0253 + 0.85+0.3;
    model.v[v][2] += 6.75 - 0.75;
    model.v[v][1] += 0.4;
  }
  
  for (cp in camPathList['tonnel3']) {
    let c = camPathList['tonnel3'][cp];
    if (c['frame'] >= 272) {
    
    
    c.picoEye = rotY(c.picoEye, 101);
    c.picoEye = rotX(c.picoEye, 10);
    c.picoEye = rotZ(c.picoEye, 10);

    c.picoDir = normalize(rotY(c.picoDir, 101));
    c.picoDir = normalize(rotX(c.picoDir, 10));
    c.picoDir = normalize(rotZ(c.picoDir, 10));
    
    c.picoUp = normalize(rotY(c.picoUp, 101));
    c.picoUp = normalize(rotX(c.picoUp, 10));
    c.picoUp = normalize(rotZ(c.picoUp, 10));

    c.picoEye[0] += 13.9 -0.025 +0.5;
    c.picoEye[2] += 6.75;
    c.picoEye[1] += 0.6;
    camPathList['tonnel3'][cp] = c;
    }
  }
  
  models['tonnel3'] = model;

}


function init_tonnel2() {
  modelRenderList.push({
    model: 'tonnel2',
    campath: 'tonnel2',
  });
  let model = {
		fstart: useFrameLimit ? models_tonnel2_fstart : 0,
		fend: useFrameLimit ? models_tonnel2_fend : 9999,
    v: [],
    f: [],
  }

  let colors = [
    [
      '#5F5F5F', '#2F2F2F', '#3F3F3F', '#4F4F4F',
      '#4F4F4F', '#1F1F1F', '#2F2F2F', '#3F3F3F',
      '#6F6F6F', '#3F3F3F', '#4F4F4F', '#5F5F5F'
    ],[
      '#1F4F6F', '#0F1F3F', '#0F2F4F', '#0F3F5F',
      '#0F3F5F', '#0F0F2F', '#0F1F3F', '#0F2F4F',
      '#2F5F7F', '#0F2F4F', '#0F3F5F', '#1F4F6F'
    ],
  ];
  let colors2 = [
    '#2F5F7F', '#0F2F4F', '#0F1F3F', '#0F3F5F', '#1F4F6F',
  ];
  
  colors2 = [
    '#7F5F2F', '#4F2F0F', '#3F1F0F', '#5F3F0F', '#6F4F1F',
  ];

  let nqty = 6;
  let sx = 2;
  let sy = 1.15;
  let bsx = 0.6;
  let bsy = 0.2;
  let pqty = 16;

  let mDx = sx*4.0;
  let mA1 = 17;
  let mA2 = 3;

  picoEye = [0.16315171008539667, 0.010040940234602069, -2.0926391519412997];
  picoDir = [-0.16676849271283986, 0.001745328365898307, 0.9859945353130425];
  picoUp = [0.18223551240280153, 0.9832534076734651, -0.0017188129062887829];

  camPathList['tonnel2'] = [];
  camMovDir(0.1);
  camPathList['tonnel2'].push({"frame":-1, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  camMovDir(-0.1);
  camPathList['tonnel2'].push({"frame":173, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  resetCam();
  camRotDir(-10);
  picoEye[2] += 1.90;
  picoEye[0] += 0.35;
  picoEye[1] -= 0.35;
  camPathList['tonnel2'].push({"frame":177, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  
  picoEye = [1.271560344152497, -0.13603620249942217, 4.322971003903009];
  picoDir = [0.5284383347223481, 0, 0.848971687629141];
  picoUp = [0.20278729535651238, 0.9792228106217659, 0];
  camPathList['tonnel2'].push({"frame":187, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  
  picoEye = [4.074715770724727, 0.34278101788044535, 6.994318648260043];
  picoDir = [0.26723837607826045, 0.006727355024892052, 0.9636069702142173];
  picoUp = [0.09584832970551843, 0.995372474973389, -0.006836209330652076];
  camPathList['tonnel2'].push({"frame":196, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  
  picoEye = [7.192978349206639, 0.21598266144846018, 8.205872019233116];
  picoDir = [0.4430667905498216, 0.006727355024892057, 0.8964633633374259];
  picoUp = [0.16332691990534992, 0.9865483178619379, -0.006836209330652075];
  camPathList['tonnel2'].push({"frame":205, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
 
  picoEye = [9.079902788059055, 0.002045785945748315, 8.321120186877616];
  picoDir = [0.5432481412180243, 0.040384812469536034, 0.8386003362657101];
  picoUp = [0.16332691990534992, 0.9865483178619379, -0.006836209330652075];
  camPathList['tonnel2'].push({"frame":211, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  picoEye = [9.951576335205841, 0.09079852935996509, 8.257336426657773];
  picoDir = [0.6441655692910158, 0.023164310561330184, 0.7645352405587332];
  picoUp = [0.16332691990534992, 0.9865483178619379, -0.006836209330652075];
  camPathList['tonnel2'].push({"frame":217, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  picoEye = [10.228942876385824, 0.023111666460030378, 8.350297328292744];
  picoDir = [0.7556264046780922, 0.0039524560092992905, 0.6549909271468993];
  picoUp = [0.16332691990534992, 0.9865483178619379, -0.006836209330652075];
  camPathList['tonnel2'].push({"frame":230, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  picoEye = [10.422484942084028, 0.22717788135267877, 7.0884229715284865];
  picoDir = [0.7556264046780922, 0.0039524560092992905, 0.6549909271468993];
  picoUp = [0.27882133572401463, 0.9501047487055678, -0.13985574436613707];
  camPathList['tonnel2'].push({"frame":238, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  picoEye = [9.965944247800214, 0.24783986035390934, 5.96629972325399];
  picoDir = [0.8689764021473055, -0.085577658349244, 0.4873976578755631];
  picoUp = [0.3135707210824459, 0.938858119172502, -0.14219294969761104];
  camPathList['tonnel2'].push({"frame":248, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  picoEye = [10.281882058105818, 0.5942231446304698, 6.017284930717076];
  picoDir = [0.9382223970995693, -0.13421832447491724, 0.31894227527231916];
  picoUp = [0.3135707210824459, 0.938858119172502, -0.14219294969761104];
  camPathList['tonnel2'].push({"frame":258, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  picoEye = [12.134608921353186, 1.0294400021359373, 6.341119408659993];
  picoDir = [0.9823712566594063, -0.1633072490619756, 0.09098052809930803];
  picoUp = [0.2955135331537509, 0.9441069093978508, -0.14606127258868254];
  camPathList['tonnel2'].push({"frame":265, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  
  
  // tonnel 3
  picoEye = [13.748000755224625, 0.3212551769883694, 6.035382116767029];
  picoDir = [0.9667918739663479, 0.2472922723303494, 0.06449809670315627];
  picoUp = [-0.11021826653642032, 0.9766696902019215, -0.18430477466031459];
  camPathList['tonnel2'].push({"frame":272, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  
  picoEye = [17.460640384791574, 0.5938755401721337, 5.700095950357147];
  picoDir = [0.8241193776821814, 0.423491454415918, 0.3761412492208541];
  picoUp = [-0.2773757135698971, 0.9510642724999634, -0.1361596970314849];
  picoEye = [17.302076159760276, 0.6233548956677425, 6.131388855083689];
  picoDir = [0.8621381087824994, 0.416085869729197, 0.2891200968397615];
  picoUp = [-0.2716581432218025, 0.9524207880849526, -0.1381900707175464];
  picoEye = [17.326249812999624, 0.707675320734195, 6.410938973724587];
  picoDir = [0.8832626305748209, 0.4036092715371722, 0.23863503799585006];
  picoUp = [-0.2613329871713464, 0.9552186068333138, -0.13878934748576366];
  camPathList['tonnel2'].push({"frame":287, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  
  picoEye = [21.092609702158267, 1.8388679167495754, 7.472135394367722];
  picoDir = [0.6942830768855234, 0.5350346361581032, 0.4813615556538938];
  picoUp = [-0.4285936675846266, 0.894633642370126, -0.1262462436903379];
  camPathList['tonnel2'].push({"frame":305, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  
  picoEye = [23.36902477833356, 3.5999814013794658, 9.510123455069872];
  picoDir = [0.5755214026760941, 0.3365345698459256, 0.7453318712898028];
  picoUp = [-0.4113824015498961, 0.9090225186301493, 0.06665268425457566];
  camPathList['tonnel2'].push({"frame":325, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  
  picoEye = [24.429482985820712, 4.711449471473089, 11.36641355260299];
  picoDir = [0.42797510172631814, -0.04725084725535299, 0.9025545245224794];
  picoUp = [-0.314135488927993, 0.8915287660848609, 0.32633625884841];
  camPathList['tonnel2'].push({"frame":340, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  
  
  picoEye = [24.78879976657358, 4.870387194743223, 11.97632396618108];
  picoDir = [0.32304696590359705, -0.09838874277071898, 0.9412546483903691];
  picoUp = [-0.33381146797772293, 0.882196340158097, 0.33211371735930584];
  camPathList['tonnel2'].push({"frame":345, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  
  camMovDir(0.1);
  camPathList['tonnel2'].push({"frame":-1, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
  
  
  for (let n = 0; n < nqty; n++) {

    // create points
    let points = [
      [-sx, -sy, 0],
      [-sx,  sy, 0],
      [ sx,  sy, 0],
      [ sx, -sy, 0],

      [-sx, -sy, 0],
      [-sx,  sy, 0],
      [ sx,  sy, 0],
      [ sx, -sy, 0],

      [-sx+bsx, -sy+bsy, 0],
      [-sx+bsx,  sy-bsy, 0],
      [ sx-bsx,  sy-bsy, 0],
      [ sx-bsx, -sy+bsy, 0],

      [-sx+bsx, -sy+bsy, 0],
      [-sx+bsx,  sy-bsy, 0],
      [ sx-bsx,  sy-bsy, 0],
      [ sx-bsx, -sy+bsy, 0],

    ];

    // modify points
    for (let p in points) {
      points[p][0] -= mDx;
      let alpha = n*mA1;
      if (p >= 4) {
        alpha = (n+1)*mA1 - mA2;
      }
      if (p >= 12) {
        alpha = (n+1)*mA1;
      }
      points[p] = rotY(points[p], alpha);
      points[p][0] += mDx;
      points[p] = rotX(points[p], 2);
    }

    // push points
    for (let p in points) {
      model.v.push(points[p]);
    }
    // push polygons
    if (n < nqty) {
      let nn = n*pqty;
      let n1 = 4;
      let n2 = 8;
      model.f.push([colors[n%2][0], nn+1, nn+2, nn+6]);
      model.f.push([colors[n%2][0], nn+6, nn+5, nn+1]);
      model.f.push([colors[n%2][1], nn+2, nn+3, nn+7]);
      model.f.push([colors[n%2][1], nn+7, nn+6, nn+2]);
      model.f.push([colors[n%2][2], nn+3, nn+4, nn+8]);
      model.f.push([colors[n%2][2], nn+8, nn+7, nn+3]);
      model.f.push([colors[n%2][3], nn+4, nn+1, nn+5]);
      model.f.push([colors[n%2][3], nn+5, nn+8, nn+4]);
      //---
      model.f.push([colors[n%2][4], nn+n1+1, nn+n1+2, nn+n1+6]);
      model.f.push([colors[n%2][4], nn+n1+6, nn+n1+5, nn+n1+1]);
      model.f.push([colors[n%2][5], nn+n1+2, nn+n1+3, nn+n1+7]);
      model.f.push([colors[n%2][5], nn+n1+7, nn+n1+6, nn+n1+2]);
      model.f.push([colors[n%2][6], nn+n1+3, nn+n1+4, nn+n1+8]);
      model.f.push([colors[n%2][6], nn+n1+8, nn+n1+7, nn+n1+3]);
      model.f.push([colors[n%2][7], nn+n1+4, nn+n1+1, nn+n1+5]);
      model.f.push([colors[n%2][7], nn+n1+5, nn+n1+8, nn+n1+4]);
      //---
      model.f.push([colors[n%2][8], nn+n2+1, nn+n2+2, nn+n2+6]);
      model.f.push([colors[n%2][8], nn+n2+6, nn+n2+5, nn+n2+1]);
      model.f.push([colors[n%2][9], nn+n2+2, nn+n2+3, nn+n2+7]);
      model.f.push([colors[n%2][9], nn+n2+7, nn+n2+6, nn+n2+2]);
      model.f.push([colors[n%2][10], nn+n2+3, nn+n2+4, nn+n2+8]);
      model.f.push([colors[n%2][10], nn+n2+8, nn+n2+7, nn+n2+3]);
      model.f.push([colors[n%2][11], nn+n2+4, nn+n2+1, nn+n2+5]);
      model.f.push([colors[n%2][11], nn+n2+5, nn+n2+8, nn+n2+4]);
    }
  }

  sx = 2;
  sy = 1.75;//1.75;
  sz = 2.2;
  let bs = 0.25;
  bsx = 0.15;
  //--- squad
  points = [
    [-sx, -sy, -sz],
    [-sx,  0,  -sz],
    [-sx,  sy, -sz],

    [-sx, -sy, 0],
    [-sx,  0,  0],
    [-sx,  sy, 0],

    [-sx, -sy, sz],
    [-sx,  0,  sz],
    [-sx,  sy, sz],

    [-sx-bsx, -sy + bs, -sz + bs],
    [-sx-bsx,  0 - bs,  -sz + bs],
    [-sx-bsx,  0 - bs,  0 - bs],
    [-sx-bsx, -sy + bs, 0 - bs],

    [-sx-bsx,  0 + bs,  0 + bs],
    [-sx-bsx,  sy - bs, 0 + bs],
    [-sx-bsx,  sy - bs, sz - bs],
    [-sx-bsx,  0 + bs,  sz - bs],
  ];
  let points2 = [];
  for (let p in points) {
    points[p][1] += 0.25;
    let pp = points[p];
    pp = rotY(pp, 180);
    points2.push(pp);
  }

  // modify points
  let alpha2 = -15;
  let nstp = 0.8;
  for (let p in points) {
    points[p] = rotY(points[p], alpha2);
    alpha = (nqty+nstp)*mA1;
    points[p][0] -= mDx;
    points[p] = rotY(points[p], alpha);
    points[p][0] += mDx;
    points[p] = rotX(points[p], 2);
  }
  for (let p in points2) {
    points2[p] = rotY(points2[p], alpha2);
    alpha = (nqty+nstp)*mA1;
    points2[p][0] -= mDx;
    points2[p] = rotY(points2[p], alpha);
    points2[p][0] += mDx;
    points2[p] = rotX(points2[p], 2);
  }

  // push points
  for (let p in points) {
    model.v.push(points[p]);
  }
  for (let p in points2) {
    model.v.push(points2[p]);
  }
  // push polygons
  for (let k = 0; k < 2; k++) {
    let nn = nqty*pqty + 17*k;
    model.f.push([colors2[0], nn+2, nn+3, nn+6]);
    model.f.push([colors2[0], nn+6, nn+5, nn+2]);
    model.f.push([colors2[0], nn+4, nn+5, nn+8]);
    model.f.push([colors2[0], nn+8, nn+7, nn+4]);
    for (let m = 0; m < 2; m++) {
      nn += m*4;
      model.f.push([colors2[0], nn+10, nn+11, nn+12]);
      model.f.push([colors2[0], nn+12, nn+13, nn+10]);
      
      model.f.push([colors2[1], nn+1, nn+2, nn+11]);
      model.f.push([colors2[1], nn+11, nn+10, nn+1]);
      model.f.push([colors2[2], nn+2, nn+5, nn+12]);
      model.f.push([colors2[2], nn+12, nn+11, nn+2]);
      model.f.push([colors2[3], nn+5, nn+4, nn+13]);
      model.f.push([colors2[3], nn+13, nn+12, nn+5]);
      model.f.push([colors2[4], nn+4, nn+1, nn+10]);
      model.f.push([colors2[4], nn+10, nn+13, nn+4]);
    }
  }
  let nn = nqty*pqty;
  model.f.push([colors2[1], nn+3+17, nn+9, nn+3]);
  model.f.push([colors2[1], nn+3, nn+9+17, nn+3+17]);
  
  model.f.push([colors2[3], nn+1, nn+7, nn+1+17]);
  model.f.push([colors2[3], nn+1+17, nn+7+17, nn+1]);

  models['tonnel2'] = model;
}



function init_tonnel4() {
  modelRenderList.push({
    model: 'tonnel4',
    campath: 'rotor',// 'tonnel3',
  });
  let model = {
		fstart: useFrameLimit ? models_tonnel4_fstart : 0,
		fend: useFrameLimit ? models_tonnel4_fend : 9999,
    v: [],
    f: [],
  }
  let colors = [
    ['#0f1f0f', '#1f2f1f' ,'#4f5f4f'],
    ['#7f7f0f', '#2f3f2f' ,'#5f6f5f'],
  ];
  
  /*
  colors = [
    ['#404040', '#ff0000' ,'#ff0000'],
    ['#ffffff', '#0000a0' ,'#0000a0'],
  ];
  */
  
  var ml = 0.5;
  const sx = ml*2.5;
  const sy = ml*1;
  const sz = 1.0;
  const nqty = 20;
  const rz = -(180 / nqty);
  const rx = -1;
  let prevPoints = [];

  // first for spline
  camPathList['tonnel4'] = [];
  resetCam();
  camMovDir(0.1);
  camPathList['tonnel4'].push({"frame":-1, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});

  for (let n = 0; n <= nqty; n++) {

    // create points
    let points = [
			[-sx, -sy, sz*n],
			[-sx, sy, sz*n],
			[sx, sy, sz*n],
			[sx, -sy, sz*n],
    ];

    // modify points
    for (let p in points) {
      points[p] = rotX(points[p], rx*n);
      points[p] = rotZ(points[p], rz*n);
      points[p] = rotZ(points[p], -15);
    }

    resetCam();
    picoEye[2] = sz*n;
    picoEye[0] = (points[0][0] + points[1][0] + points[2][0] + points[3][0]) / 4;
    picoEye[1] = (points[0][1] + points[1][1] + points[2][1] + points[3][1]) / 4;
    picoDir = normalize(rotZ(picoDir, rz*n));
    if (n > 0) {
      picoDir[0] = (points[0][0] + points[1][0] + points[2][0] + points[3][0]) / 4
        - (prevPoints[0][0] + prevPoints[1][0] + prevPoints[2][0] + prevPoints[3][0]) / 4;
      picoDir[1] = (points[0][1] + points[1][1] + points[2][1] + points[3][1]) / 4
        - (prevPoints[0][1] + prevPoints[1][1] + prevPoints[2][1] + prevPoints[3][1]) / 4;
      picoDir[2] = (points[0][2] + points[1][2] + points[2][2] + points[3][2]) / 4
        - (prevPoints[0][2] + prevPoints[1][2] + prevPoints[2][2] + prevPoints[3][2]) / 4;
      picoDir = normalize(picoDir);
    }
    camPathList['tonnel4'].push({"frame":591 + n*7, "picoEye":picoEye, "picoDir":picoDir, "picoUp":picoUp});
    
    for (let p in points) {
      prevPoints[p] = [];
      prevPoints[p][0] = points[p][0];
      prevPoints[p][1] = points[p][1];
      prevPoints[p][2] = points[p][2];
    }
    
    //model to model
    for (let p in points) {
      points[p] = rotZ(points[p],17);
      points[p][2] += 2.25;
      points[p][1] -= 2.85;
      points[p] = rotY(points[p],45);
      /*
      points[p] = rotZ(points[p],30);
      points[p] = rotY(points[p],40);
      points[p][2] += 2.5;
      points[p][1] -= 2;
      points[p][0] += 2;
      */
    }
    
    
    

    // push points
    for (let p in points) {
      model.v.push(points[p]);
    }
    // push polygons
    if (n < nqty) {
      let nn = n*4;
      model.f.push([colors[n%2][0], nn+1, nn+2, nn+6]);
      model.f.push([colors[n%2][0], nn+6, nn+5, nn+1]);
      model.f.push([colors[n%2][1], nn+2, nn+3, nn+7]);
      model.f.push([colors[n%2][1], nn+7, nn+6, nn+2]);
      model.f.push([colors[n%2][0], nn+3, nn+4, nn+8]);
      model.f.push([colors[n%2][0], nn+8, nn+7, nn+3]);
      model.f.push([colors[n%2][2], nn+4, nn+1, nn+5]);
      model.f.push([colors[n%2][2], nn+5, nn+8, nn+4]);
    }
  }
  models['tonnel4'] = model;
}



function init_testcube() {
	let sz = 1;
	models['testcube'] = {
		fstart: 0,
		fend: 9999,
		v:[
			[-sz, -sz, -sz],
			[-sz, sz, -sz],
			[sz, sz, -sz],
			[sz, -sz, -sz],

			[-sz, -sz, sz],
			[-sz, sz, sz],
			[sz, sz, sz],
			[sz, -sz, sz],
		],
		f:[
			['#000080', 5, 6, 7],
      ['#0000ff', 7, 8, 5],
      
      ['#ff0000', 1, 2, 6],
      ['#800000', 6, 5, 1],
      
      ['#00ff00', 2, 3, 7],
      ['#008000', 7, 6, 2],
      
      ['#ff00ff', 3, 4, 8],
      ['#800080', 8, 7, 3],

      ['#ffff00', 4, 1, 5],
      ['#808000', 5, 8, 4],      

		]
	};
	console.log(models);
	
}


function init_oxygen() { 	// transform base model OXYGEN

  let models_oxygen = {
    "O": {
      fstart: models_oxygen_fstart,
      fend: models_oxygen_fend,
      v: [[1.083343,0.0,-1.158421], [1.083343,0.0,-2.707567], [1.126741,0.0,-2.873927], [1.193991,0.0,-2.903602], [1.119508,0.0,-1.02461], [1.30464,0.0,-1.158421], [1.30464,0.0,-2.707567], [1.261242,0.0,-2.873927], [1.268475,0.0,-1.02461], [1.193991,0.0,-0.994583], [1.083343,0.593809,-1.158421], [1.083343,0.593809,-2.707567], [1.126741,0.593809,-2.873927], [1.193991,0.593809,-2.903602], [1.119508,0.593809,-1.02461], [1.193991,0.593809,-0.994583], [1.30464,0.593809,-1.158421], [1.30464,0.593809,-2.707567], [1.261242,0.593809,-2.873927], [1.268475,0.593809,-1.02461], [0.487887,0.0,-1.158421], [0.404128,0.13204,-1.158421], [0.404128,0.13204,-2.707567], [0.487947,0.0,-2.707567], [0.461992,0.13204,-2.949873], [0.544248,0.0,-2.940476], [0.621119,0.13204,-3.145165], [0.688988,0.0,-3.116547], [0.903659,0.13204,-3.291667], [0.938557,0.0,-3.245022], [0.569968,0.0,-0.917111], [0.490925,0.13204,-0.901649], [1.193991,0.13204,-3.331781], [1.193991,0.0,-3.280005], [0.753714,0.0,-0.719275], [0.693935,0.13204,-0.681896], [1.193991,0.0,-0.604892], [1.193991,0.13204,-0.55109], [0.88433,0.13204,-0.600505], [0.921728,0.0,-0.6481], [1.983855,0.13204,-1.158421], [1.900095,0.0,-1.158421], [1.900036,0.0,-2.707567], [1.983855,0.13204,-2.707567], [1.843735,0.0,-2.940476], [1.92599,0.13204,-2.949873], [1.698995,0.0,-3.116547], [1.766864,0.13204,-3.145165], [1.449426,0.0,-3.245022], [1.484324,0.13204,-3.291667], [1.897058,0.13204,-0.901649], [1.818015,0.0,-0.917111], [1.694048,0.13204,-0.681896], [1.634269,0.0,-0.719275], [1.503653,0.13204,-0.600505], [1.466254,0.0,-0.6481], [0.487947,0.593809,-2.707567], [0.404128,0.461769,-2.707567], [0.404128,0.461769,-1.158421], [0.487887,0.593809,-1.158421], [0.544248,0.593809,-2.940476], [0.461992,0.461769,-2.949873], [0.688988,0.593809,-3.116547], [0.621119,0.461769,-3.145165], [0.490925,0.461769,-0.901649], [0.569968,0.593809,-0.917111], [0.938557,0.593809,-3.245022], [0.903659,0.461769,-3.291667], [1.193991,0.593809,-3.280005], [1.193991,0.461769,-3.331781], [0.693935,0.461769,-0.681896], [0.753714,0.593809,-0.719275], [0.921728,0.593809,-0.6481], [0.88433,0.461769,-0.600505], [1.193991,0.461769,-0.55109], [1.193991,0.593809,-0.604892], [1.983855,0.461769,-2.707567], [1.900036,0.593809,-2.707567], [1.900095,0.593809,-1.158421], [1.983855,0.461769,-1.158421], [1.92599,0.461769,-2.949873], [1.843735,0.593809,-2.940476], [1.766864,0.461769,-3.145165], [1.698995,0.593809,-3.116547], [1.818015,0.593809,-0.917111], [1.897058,0.461769,-0.901649], [1.484324,0.461769,-3.291667], [1.449426,0.593809,-3.245022], [1.634269,0.593809,-0.719275], [1.694048,0.461769,-0.681896], [1.466254,0.593809,-0.6481], [1.503653,0.461769,-0.600505], ],
      f: [["#ffa300",1,31,21], ["#ffa300",23,62,25], ["#ffa300",25,64,27], ["#ffa300",27,68,29], ["#ffa300",29,70,33], ["#ffa300",32,59,22], ["#ffa300",36,65,32], ["#ffa300",38,74,39], ["#ffa300",10,56,37], ["#ffa300",6,52,9], ["#ffa300",46,77,44], ["#ffa300",48,81,46], ["#ffa300",9,54,10], ["#ffa300",33,87,50], ["#ffa300",41,86,51], ["#ffa300",51,90,53], ["#ffa300",11,57,60], ["#ffa300",55,75,38], ["#808080",12,61,57], ["#ffa300",11,66,15], ["#ffa300",63,14,67], ["#ffa300",15,72,16], ["#ffa300",88,69,14], ["#ffa300",13,63,61], ["#ffa300",67,14,69], ["#ffa300",16,73,76], ["#ffa300",16,76,91], ["#ffa300",82,18,78], ["#ffa300",17,85,79], ["#ffa300",84,88,14], ["#ffa300",20,89,85], ["#ffa300",16,72,73], ["#ffa300",84,19,82], ["#ffa300",16,91,89], ["#ffa300",78,17,79], ["#ffa300",8,47,45], ["#ffa300",49,4,34], ["#ffa300",44,80,41], ["#ffa300",50,83,48], ["#ffa300",10,37,40], ["#ffa300",3,12,2], ["#ffa300",7,45,43], ["#ffa300",10,40,35], ["#ffa300",28,3,26], ["#ffa300",47,4,49], ["#ffa300",4,13,3], ["#ffa300",8,14,4], ["#ffa300",28,30,4], ["#ffa300",5,16,10], ["#ffa300",26,2,24], ["#ffa300",9,17,6], ["#ffa300",6,43,42], ["#ffa300",53,92,55], ["#ffa300",30,34,4], ["#ffa300",10,54,56], ["#ffa300",6,18,7], ["#ffa300",24,1,21], ["#ffa300",5,35,31], ["#ffa300",10,20,9], ["#ffa300",2,11,1], ["#ffa300",7,19,8], ["#ffa300",1,15,5], ["#ffa300",39,71,36], ["#ffa300",22,58,23], ["#ffa300",1,5,31], ["#ffa300",23,58,62], ["#ffa300",25,62,64], ["#ffa300",27,64,68], ["#ffa300",29,68,70], ["#ffa300",32,65,59], ["#ffa300",36,71,65], ["#ffa300",38,75,74], ["#ffa300",6,42,52], ["#ffa300",46,81,77], ["#ffa300",48,83,81], ["#ffa300",9,52,54], ["#ffa300",33,70,87], ["#ffa300",41,80,86], ["#ffa300",51,86,90], ["#ffa300",11,12,57], ["#ffa300",55,92,75], ["#ffa300",12,13,61], ["#ffa300",11,60,66], ["#ffa300",15,66,72], ["#ffa300",13,14,63], ["#ffa300",82,19,18], ["#ffa300",17,20,85], ["#ffa300",20,16,89], ["#ffa300",84,14,19], ["#ffa300",78,18,17], ["#ffa300",8,4,47], ["#ffa300",44,77,80], ["#ffa300",50,87,83], ["#ffa300",3,13,12], ["#ffa300",7,8,45], ["#ffa300",28,4,3], ["#ff004d",4,14,13], ["#ff004d",8,19,14], ["#ffa300",5,15,16], ["#ffa300",26,3,2], ["#ff004d",9,20,17], ["#ffa300",6,7,43], ["#ffa300",53,90,92], ["#ff004d",6,17,18], ["#ffa300",24,2,1], ["#ffa300",5,10,35], ["#ff004d",10,16,20], ["#ff004d",2,12,11], ["#ff004d",7,18,19], ["#ff004d",1,11,15], ["#ffa300",39,74,71], ["#ffa300",22,59,58], ["#ff004d",21,23,24], ["#ff004d",24,25,26], ["#ff004d",26,27,28], ["#ff004d",21,32,22], ["#ff004d",28,29,30], ["#ff004d",30,33,34], ["#ff004d",31,36,32], ["#ff004d",40,38,39], ["#ff004d",35,39,36], ["#ff004d",44,42,43], ["#ff004d",46,43,45], ["#ff004d",48,45,47], ["#ff004d",51,42,41], ["#ff004d",50,47,49], ["#ff004d",53,52,51], ["#ff004d",55,54,53], ["#ff004d",33,49,34], ["#ff004d",38,56,55], ["#ff004d",58,60,57], ["#ff004d",62,57,61], ["#ff004d",64,61,63], ["#ff004d",65,60,59], ["#ff004d",68,63,67], ["#ff004d",70,67,69], ["#ff004d",71,66,65], ["#ff004d",75,73,74], ["#ff004d",74,72,71], ["#ff004d",79,77,78], ["#ff004d",78,81,82], ["#ff004d",82,83,84], ["#ff004d",79,86,80], ["#ff004d",84,87,88], ["#ff004d",85,90,86], ["#ff004d",89,92,90], ["#ff004d",88,70,69], ["#ff004d",91,75,92], ["#ff004d",21,22,23], ["#ff004d",24,23,25], ["#ff004d",26,25,27], ["#ff004d",21,31,32], ["#ff004d",28,27,29], ["#ff004d",30,29,33], ["#ff004d",31,35,36], ["#ff004d",40,37,38], ["#ff004d",35,40,39], ["#ff004d",44,41,42], ["#ff004d",46,44,43], ["#ff004d",48,46,45], ["#ff004d",51,52,42], ["#ff004d",50,48,47], ["#ff004d",53,54,52], ["#ff004d",55,56,54], ["#ff004d",33,50,49], ["#ff004d",38,37,56], ["#ff004d",58,59,60], ["#ff004d",62,58,57], ["#ff004d",64,62,61], ["#ff004d",65,66,60], ["#ff004d",68,64,63], ["#ff004d",70,68,67], ["#ff004d",71,72,66], ["#ff004d",75,76,73], ["#ff004d",74,73,72], ["#ff004d",79,80,77], ["#ff004d",78,77,81], ["#ff004d",82,81,83], ["#ff004d",79,85,86], ["#ff004d",84,83,87], ["#ff004d",85,89,90], ["#ff004d",89,91,92], ["#ff004d",88,87,70], ["#ff004d",91,76,75], ],
    },
    "X": {
      fstart: models_oxygen_fstart,
      fend: models_oxygen_fend,
      v: [[2.906912,-6.1e-05,-2.061697], [2.906912,0.593748,-2.061697], [2.369041,-6.1e-05,-1.582474], [2.292071,0.131979,-1.582474], [3.547069,0.131979,-1.582474], [3.469565,-6.1e-05,-1.582474], [2.288455,0.131979,-2.540919], [2.365452,-6.1e-05,-2.540919], [3.429864,-6.1e-05,-2.540919], [3.507288,0.131979,-2.540919], [2.92006,-6.1e-05,-2.000535], [2.935844,0.131979,-1.582474], [2.927768,-6.1e-05,-2.168767], [2.932228,0.131979,-2.540919], [2.3861,0.131979,-2.061697], [2.463089,-6.1e-05,-2.061697], [3.427724,0.131979,-2.061697], [3.350268,-6.1e-05,-2.061697], [3.666414,0.131979,-3.264221], [3.572358,-6.1e-05,-3.188616], [3.152135,-6.1e-05,-3.188616], [3.091354,0.131979,-3.264221], [2.239152,-6.1e-05,-3.188616], [2.14741,0.131979,-3.264221], [2.791184,0.131979,-3.264221], [2.728898,-6.1e-05,-3.188616], [2.125711,0.131979,-0.609632], [2.2156,-6.1e-05,-0.685238], [2.729366,-6.1e-05,-0.685238], [2.7948,0.131979,-0.609632], [3.693024,-6.1e-05,-0.685238], [3.789376,0.131979,-0.609632], [3.152835,0.131979,-0.609632], [3.213435,-6.1e-05,-0.685238], [2.463089,0.593748,-2.061697], [2.3861,0.461708,-2.061697], [2.292071,0.461708,-1.582474], [2.369041,0.593748,-1.582474], [2.935844,0.461708,-1.582474], [2.92006,0.593748,-2.000535], [3.469565,0.593748,-1.582474], [3.547069,0.461708,-1.582474], [3.350268,0.593748,-2.061697], [3.427724,0.461708,-2.061697], [3.507288,0.461708,-2.540919], [3.429864,0.593748,-2.540919], [2.932228,0.461708,-2.540919], [2.927768,0.593748,-2.168767], [2.365452,0.593748,-2.540919], [2.288455,0.461708,-2.540919], [3.572358,0.593748,-3.188616], [3.666414,0.461708,-3.264221], [3.091354,0.461708,-3.264221], [3.152135,0.593748,-3.188616], [2.728898,0.593748,-3.188616], [2.791184,0.461708,-3.264221], [2.14741,0.461708,-3.264221], [2.239152,0.593748,-3.188616], [2.2156,0.593748,-0.685238], [2.125711,0.461708,-0.609632], [2.7948,0.461708,-0.609632], [2.729366,0.593748,-0.685238], [3.213435,0.593748,-0.685238], [3.152835,0.461708,-0.609632], [3.789376,0.461708,-0.609632], [3.693024,0.593748,-0.685238], ],
      f: [["#ffa300",21,9,13], ["#ffa300",15,50,7], ["#ffa300",29,3,11], ["#ffa300",17,42,5], ["#ffa300",19,45,10], ["#ffa300",7,57,24], ["#ffa300",27,37,4], ["#ffa300",5,65,32], ["#ffa300",46,54,48], ["#ffa300",38,62,40], ["#ffa300",35,48,49], ["#ffa300",43,48,2], ["#ffa300",49,55,58], ["#ffa300",41,63,66], ["#ffa300",40,43,2], ["#ffa300",11,18,6], ["#ffa300",16,11,3], ["#ffa300",30,60,27], ["#ffa300",8,26,13], ["#ffa300",14,53,22], ["#ffa300",16,13,1], ["#ffa300",13,18,1], ["#ffa300",22,52,19], ["#ffa300",32,64,33], ["#ffa300",33,39,12], ["#ffa300",24,56,25], ["#ffa300",6,34,11], ["#ffa300",25,47,14], ["#ffa300",40,35,38], ["#ffa300",12,61,30], ["#ffa300",10,44,17], ["#ffa300",4,36,15], ["#ffa300",21,20,9], ["#ffa300",15,36,50], ["#ffa300",29,28,3], ["#ffa300",17,44,42], ["#ffa300",19,52,45], ["#ffa300",7,50,57], ["#ffa300",27,60,37], ["#ffa300",5,42,65], ["#ffa300",46,51,54], ["#ffa300",38,59,62], ["#ffa300",35,2,48], ["#ffa300",43,46,48], ["#ffa300",49,48,55], ["#ffa300",41,40,63], ["#ffa300",40,41,43], ["#ffa300",11,1,18], ["#ffa300",16,1,11], ["#ffa300",30,61,60], ["#ffa300",8,23,26], ["#ffa300",14,47,53], ["#ffa300",16,8,13], ["#ffa300",13,9,18], ["#ffa300",22,53,52], ["#ffa300",32,65,64], ["#ffa300",33,64,39], ["#ffa300",24,57,56], ["#ffa300",6,31,34], ["#ffa300",25,56,47], ["#ffa300",40,2,35], ["#ffa300",12,39,61], ["#ffa300",10,45,44], ["#ffa300",4,37,36], ["#ff004d",3,15,16], ["#ff004d",9,17,18], ["#ff004d",8,15,7], ["#ff004d",6,17,5], ["#ff004d",20,22,19], ["#ff004d",21,14,22], ["#ff004d",20,10,9], ["#ff004d",23,25,26], ["#ff004d",23,7,24], ["#ff004d",26,14,13], ["#ff004d",28,30,27], ["#ff004d",29,12,30], ["#ff004d",28,4,3], ["#ff004d",31,33,34], ["#ff004d",31,5,32], ["#ff004d",34,12,11], ["#ff004d",36,38,35], ["#ff004d",44,46,43], ["#ff004d",36,49,50], ["#ff004d",44,41,42], ["#ff004d",53,51,52], ["#ff004d",47,54,53], ["#ff004d",45,51,46], ["#ff004d",56,58,55], ["#ff004d",50,58,57], ["#ff004d",47,55,48], ["#ff004d",61,59,60], ["#ff004d",39,62,61], ["#ff004d",37,59,38], ["#ff004d",64,66,63], ["#ff004d",42,66,65], ["#ff004d",39,63,40], ["#ff004d",3,4,15], ["#ff004d",9,10,17], ["#ff004d",8,16,15], ["#ff004d",6,18,17], ["#ff004d",20,21,22], ["#ff004d",21,13,14], ["#ff004d",20,19,10], ["#ff004d",23,24,25], ["#ff004d",23,8,7], ["#ff004d",26,25,14], ["#ff004d",28,29,30], ["#ff004d",29,11,12], ["#ff004d",28,27,4], ["#ff004d",31,32,33], ["#ff004d",31,6,5], ["#ff004d",34,33,12], ["#ff004d",36,37,38], ["#ff004d",44,45,46], ["#ff004d",36,35,49], ["#ff004d",44,43,41], ["#ff004d",53,54,51], ["#ff004d",47,48,54], ["#ff004d",45,52,51], ["#ff004d",56,57,58], ["#ff004d",50,49,58], ["#ff004d",47,56,55], ["#ff004d",61,62,59], ["#ff004d",39,40,62], ["#ff004d",37,60,59], ["#ff004d",64,65,66], ["#ff004d",42,41,66], ["#ff004d",39,64,63], ],
    },
    "Y": {
      fstart: models_oxygen_fstart,
      fend: models_oxygen_fend,
      v: [[4.29684,-6.1e-05,-0.686928], [4.221234,0.131979,-0.611322], [4.800286,-6.1e-05,-0.686928], [4.875891,0.131979,-0.611322], [4.221234,0.131979,-1.580616], [4.29684,-6.1e-05,-1.590858], [4.800286,-6.1e-05,-1.591433], [4.875891,0.131979,-1.580616], [4.543508,-6.1e-05,-1.76226], [4.548563,0.131979,-2.217122], [5.367134,0.131979,-3.262295], [5.266731,-6.1e-05,-3.188221], [4.73843,0.131979,-3.271939], [4.801466,-6.1e-05,-3.195358], [3.855995,-6.1e-05,-3.188205], [3.757115,0.131979,-3.262295], [4.382806,0.131979,-3.271939], [4.318311,-6.1e-05,-3.19533], [4.29684,0.593748,-1.590858], [4.221234,0.461708,-1.580616], [4.221234,0.461708,-0.611322], [4.29684,0.593748,-0.686928], [4.875891,0.461708,-0.611322], [4.800286,0.593748,-0.686928], [4.875891,0.461708,-1.580616], [4.800286,0.593748,-1.591433], [4.801466,0.593748,-3.195358], [4.73843,0.461708,-3.271939], [4.548563,0.461708,-2.217122], [4.543508,0.593748,-1.76226], [5.266731,0.593748,-3.188221], [5.367134,0.461708,-3.262295], [4.318311,0.593748,-3.19533], [4.382806,0.461708,-3.271939], [3.757115,0.461708,-3.262295], [3.855995,0.593748,-3.188205], ],
      f: [["#ffa300",4,21,2], ["#ffa300",15,9,6], ["#ffa300",11,25,8], ["#ffa300",5,35,16], ["#ffa300",19,26,30], ["#ffa300",30,36,19], ["#ffa300",30,31,27], ["#ffa300",6,9,7], ["#ffa300",24,19,22], ["#ffa300",16,34,17], ["#ffa300",9,12,7], ["#ffa300",6,3,1], ["#ffa300",17,29,10], ["#ffa300",13,32,11], ["#ffa300",8,23,4], ["#ffa300",10,28,13], ["#ffa300",2,20,5], ["#ffa300",4,23,21], ["#ffa300",15,18,9], ["#ffa300",11,32,25], ["#ffa300",5,20,35], ["#ffa300",30,33,36], ["#ffa300",30,26,31], ["#ffa300",24,26,19], ["#ffa300",16,35,34], ["#ffa300",9,14,12], ["#ffa300",6,7,3], ["#ffa300",17,34,29], ["#ffa300",13,28,32], ["#ffa300",8,25,23], ["#ffa300",10,29,28], ["#ffa300",2,21,20], ["#ff004d",1,5,6], ["#ff004d",3,2,1], ["#ff004d",3,8,4], ["#ff004d",14,10,13], ["#ff004d",12,13,11], ["#ff004d",12,8,7], ["#ff004d",15,17,18], ["#ff004d",15,5,16], ["#ff004d",18,10,9], ["#ff004d",20,22,19], ["#ff004d",23,22,21], ["#ff004d",25,24,23], ["#ff004d",29,27,28], ["#ff004d",28,31,32], ["#ff004d",25,31,26], ["#ff004d",34,36,33], ["#ff004d",20,36,35], ["#ff004d",29,33,30], ["#ff004d",1,2,5], ["#ff004d",3,4,2], ["#ff004d",3,7,8], ["#ff004d",14,9,10], ["#ff004d",12,14,13], ["#ff004d",12,11,8], ["#ff004d",15,16,17], ["#ff004d",15,6,5], ["#ff004d",18,17,10], ["#ff004d",20,21,22], ["#ff004d",23,24,22], ["#ff004d",25,26,24], ["#ff004d",29,30,27], ["#ff004d",28,27,31], ["#ff004d",25,32,31], ["#ff004d",34,35,36], ["#ff004d",20,19,36], ["#ff004d",29,34,33], ],
    },
    "G": {
      fstart: models_oxygen_fstart,
      fend: models_oxygen_fend,
      v: [[6.498119,-6.1e-05,-1.205883], [6.421922,0.131979,-1.205883], [7.080195,0.131979,-1.205883], [7.00459,-6.1e-05,-1.205883], [6.421922,0.131979,-1.634507], [6.498097,-6.1e-05,-1.710112], [7.00459,-6.1e-05,-1.634507], [7.080195,0.131979,-1.634507], [6.421922,-6.1e-05,-1.958225], [6.421922,0.131979,-2.033831], [7.080195,0.131979,-2.033831], [7.00459,-6.1e-05,-1.958225], [6.36442,-6.1e-05,-1.710112], [6.288815,0.131979,-1.634507], [6.288815,0.131979,-2.033831], [6.36442,-6.1e-05,-1.958225], [6.458818,-6.1e-05,-0.986322], [6.391785,0.131979,-1.037614], [7.080195,0.131979,-0.997431], [7.00459,-6.1e-05,-0.997303], [6.599935,0.131979,-0.794495], [6.638137,-6.1e-05,-0.940649], [7.081205,0.131979,-0.60784], [7.005405,-6.1e-05,-0.682723], [6.652418,0.131979,-0.603737], [6.709879,-6.1e-05,-0.679895], [6.290078,-6.1e-05,-0.903367], [6.298032,0.131979,-0.991525], [6.491104,0.131979,-0.666829], [6.45582,-6.1e-05,-0.726168], [6.208699,-6.1e-05,-0.918048], [6.222335,0.131979,-1.005655], [6.332786,-6.1e-05,-0.653212], [6.340416,0.131979,-0.578927], [6.151677,0.131979,-0.551676], [6.163478,-6.1e-05,-0.627503], [6.080777,-6.1e-05,-1.147113], [6.167222,0.131979,-1.105067], [5.891809,0.131979,-0.609231], [5.929976,-6.1e-05,-0.677943], [6.080343,-6.1e-05,-2.74923], [6.167222,0.131979,-2.749858], [5.69741,-6.1e-05,-0.846096], [5.623082,0.131979,-0.805125], [5.496741,0.131979,-1.100223], [5.587658,-6.1e-05,-1.100879], [5.496741,0.131979,-2.745013], [5.588007,-6.1e-05,-2.745673], [6.137058,-6.1e-05,-2.888296], [6.218091,0.131979,-2.871943], [5.572318,0.131979,-3.002264], [5.659758,-6.1e-05,-2.984619], [6.319271,-6.1e-05,-2.956308], [6.285648,0.131979,-2.896667], [5.822302,0.131979,-3.233354], [5.883885,-6.1e-05,-3.188606], [6.269999,0.131979,-3.327792], [6.2722,-6.1e-05,-3.267159], [6.088325,0.131979,-3.317619], [6.115512,-6.1e-05,-3.25962], [6.538131,0.131979,-3.299003], [6.50261,-6.1e-05,-3.242399], [6.430145,-6.1e-05,-2.917721], [6.360332,0.131979,-2.870911], [6.814011,0.131979,-3.175107], [6.750108,-6.1e-05,-3.13226], [6.473283,-6.1e-05,-2.77057], [6.396491,0.131979,-2.748689], [7.020043,0.131979,-2.926365], [6.940786,-6.1e-05,-2.903781], [6.475748,-6.1e-05,-2.584281], [6.398822,0.131979,-2.582975], [7.080517,0.131979,-2.594548], [6.998173,-6.1e-05,-2.59315], [6.398822,0.131979,-2.287611], [6.475697,-6.1e-05,-2.364532], [6.998432,-6.1e-05,-2.373407], [7.080517,0.131979,-2.299184], [6.498097,0.593748,-1.710112], [6.421922,0.461708,-1.634507], [6.421922,0.461708,-1.205883], [6.498119,0.593748,-1.205883], [7.00459,0.593748,-1.205883], [7.080195,0.461708,-1.205883], [7.080195,0.461708,-1.634507], [7.00459,0.593748,-1.634507], [7.00459,0.593748,-1.958225], [7.080195,0.461708,-2.033831], [6.421922,0.461708,-2.033831], [6.421922,0.593748,-1.958225], [6.36442,0.593748,-1.958225], [6.288815,0.461708,-2.033831], [6.288815,0.461708,-1.634507], [6.36442,0.593748,-1.710112], [6.391785,0.461708,-1.037614], [6.458818,0.593748,-0.986322], [7.00459,0.593748,-0.997303], [7.080195,0.461708,-0.997431], [7.005405,0.593748,-0.682723], [7.081205,0.461708,-0.60784], [6.709879,0.593748,-0.679895], [6.652418,0.461708,-0.603737], [6.638137,0.593748,-0.940649], [6.599935,0.461708,-0.794495], [6.298032,0.461708,-0.991525], [6.290078,0.593748,-0.903367], [6.45582,0.593748,-0.726168], [6.491104,0.461708,-0.666829], [6.163478,0.593748,-0.627503], [6.151677,0.461708,-0.551676], [6.340416,0.461708,-0.578927], [6.332786,0.593748,-0.653212], [6.222335,0.461708,-1.005655], [6.208699,0.593748,-0.918048], [6.167222,0.461708,-1.105067], [6.080777,0.593748,-1.147113], [5.929976,0.593748,-0.677943], [5.891809,0.461708,-0.609231], [5.587658,0.593748,-1.100879], [5.496741,0.461708,-1.100223], [5.623082,0.461708,-0.805125], [5.69741,0.593748,-0.846096], [5.588007,0.593748,-2.745673], [5.496741,0.461708,-2.745013], [6.167222,0.461708,-2.749858], [6.080343,0.593748,-2.74923], [6.218091,0.461708,-2.871943], [6.137058,0.593748,-2.888296], [5.659758,0.593748,-2.984619], [5.572318,0.461708,-3.002264], [6.285648,0.461708,-2.896667], [6.319271,0.593748,-2.956308], [5.883885,0.593748,-3.188606], [5.822302,0.461708,-3.233354], [6.115512,0.593748,-3.25962], [6.088325,0.461708,-3.317619], [6.2722,0.593748,-3.267159], [6.269999,0.461708,-3.327792], [6.50261,0.593748,-3.242399], [6.538131,0.461708,-3.299003], [6.360332,0.461708,-2.870911], [6.430145,0.593748,-2.917721], [6.750108,0.593748,-3.13226], [6.814011,0.461708,-3.175107], [6.396491,0.461708,-2.748689], [6.473283,0.593748,-2.77057], [6.940786,0.593748,-2.903781], [7.020043,0.461708,-2.926365], [6.398822,0.461708,-2.582975], [6.475748,0.593748,-2.584281], [6.998173,0.593748,-2.59315], [7.080517,0.461708,-2.594548], [6.475697,0.593748,-2.364532], [6.398822,0.461708,-2.287611], [7.080517,0.461708,-2.299184], [6.998432,0.593748,-2.373407], ],
      f: [["#ffa300",20,1,4], ["#ffa300",13,9,6], ["#ffa300",5,93,14], ["#ffa300",18,81,2], ["#ffa300",30,17,22], ["#ffa300",25,104,21], ["#ffa300",28,95,18], ["#ffa300",36,27,33], ["#ffa300",32,105,28], ["#ffa300",38,113,32], ["#ffa300",43,46,37], ["#ffa300",48,37,46], ["#ffa300",42,115,38], ["#ffa300",50,125,42], ["#ffa300",54,127,50], ["#ffa300",62,63,53], ["#ffa300",58,62,53], ["#ffa300",53,60,58], ["#ffa300",64,131,54], ["#ffa300",68,141,64], ["#ffa300",72,145,68], ["#ffa300",75,149,72], ["#ffa300",79,87,90], ["#ffa300",90,94,79], ["#ffa300",82,97,83], ["#ffa300",97,96,103], ["#ffa300",96,107,103], ["#ffa300",107,106,112], ["#ffa300",97,101,99], ["#ffa300",106,109,112], ["#ffa300",114,117,109], ["#ffa300",117,116,122], ["#ffa300",122,116,119], ["#ffa300",116,123,119], ["#ffa300",126,129,123], ["#ffa300",128,133,129], ["#ffa300",133,132,135], ["#ffa300",143,146,147], ["#ffa300",137,132,139], ["#ffa300",139,142,143], ["#ffa300",132,137,135], ["#ffa300",146,151,147], ["#ffa300",150,156,151], ["#ffa300",11,85,8], ["#ffa300",39,121,44], ["#ffa300",40,31,36], ["#ffa300",66,67,63], ["#ffa300",14,92,15], ["#ffa300",55,136,59], ["#ffa300",56,49,52], ["#ffa300",6,12,7], ["#ffa300",44,120,45], ["#ffa300",29,111,34], ["#ffa300",74,67,70], ["#ffa300",8,84,3], ["#ffa300",65,148,69], ["#ffa300",20,26,22], ["#ffa300",56,60,53], ["#ffa300",1,7,4], ["#ffa300",40,43,37], ["#ffa300",30,33,27], ["#ffa300",51,134,55], ["#ffa300",34,110,35], ["#ffa300",77,71,74], ["#ffa300",59,138,57], ["#ffa300",3,98,19], ["#ffa300",45,124,47], ["#ffa300",69,152,73], ["#ffa300",57,140,61], ["#ffa300",52,41,48], ["#ffa300",82,86,79], ["#ffa300",21,108,29], ["#ffa300",15,89,10], ["#ffa300",47,130,51], ["#ffa300",78,154,75], ["#ffa300",73,155,78], ["#ffa300",23,102,25], ["#ffa300",61,144,65], ["#ffa300",10,88,11], ["#ffa300",19,100,23], ["#ffa300",20,22,17], ["#ffa300",35,118,39], ["#ffa300",2,80,5], ["#ffa300",20,17,1], ["#ffa300",13,16,9], ["#ffa300",5,80,93], ["#ffa300",18,95,81], ["#ffa300",30,27,17], ["#ffa300",25,102,104], ["#ffa300",28,105,95], ["#ffa300",36,31,27], ["#ffa300",32,113,105], ["#ffa300",38,115,113], ["#ffa300",48,41,37], ["#ffa300",42,125,115], ["#ffa300",50,127,125], ["#ffa300",54,131,127], ["#ffa300",62,66,63], ["#ffa300",64,141,131], ["#ffa300",68,145,141], ["#ffa300",72,149,145], ["#ffa300",75,154,149], ["#ffa300",79,86,87], ["#ffa300",90,91,94], ["#ffa300",82,96,97], ["#ffa300",96,106,107], ["#ffa300",97,103,101], ["#ffa300",106,114,109], ["#ffa300",114,116,117], ["#ffa300",116,126,123], ["#ffa300",126,128,129], ["#ffa300",128,132,133], ["#ffa300",143,142,146], ["#ffa300",139,132,142], ["#ffa300",146,150,151], ["#ffa300",150,153,156], ["#ffa300",11,88,85], ["#ffa300",39,118,121], ["#ffa300",40,37,31], ["#ffa300",66,70,67], ["#ffa300",14,93,92], ["#ffa300",55,134,136], ["#ffa300",56,53,49], ["#ffa300",6,9,12], ["#ffa300",44,121,120], ["#ffa300",29,108,111], ["#ffa300",74,71,67], ["#ffa300",8,85,84], ["#ffa300",65,144,148], ["#ffa300",20,24,26], ["#ffa300",1,6,7], ["#ffa300",51,130,134], ["#ffa300",34,111,110], ["#ffa300",77,76,71], ["#ffa300",59,136,138], ["#ffa300",3,84,98], ["#ffa300",45,120,124], ["#ffa300",69,148,152], ["#ffa300",57,138,140], ["#ffa300",52,49,41], ["#ffa300",82,83,86], ["#ffa300",21,104,108], ["#ffa300",15,92,89], ["#ffa300",47,124,130], ["#ffa300",78,155,154], ["#ffa300",73,152,155], ["#ffa300",23,100,102], ["#ffa300",61,140,144], ["#ffa300",10,89,88], ["#ffa300",19,98,100], ["#ffa300",35,110,118], ["#ffa300",2,81,80], ["#ff004d",1,5,6], ["#ff004d",7,3,4], ["#ff004d",12,10,11], ["#ff004d",12,8,7], ["#ff004d",13,15,16], ["#ff004d",13,5,14], ["#ff004d",16,10,9], ["#ff004d",4,19,20], ["#ff004d",1,18,2], ["#ff004d",24,19,23], ["#ff004d",24,25,26], ["#ff004d",26,21,22], ["#ff004d",30,21,29], ["#ff004d",17,28,18], ["#ff004d",36,34,35], ["#ff004d",33,29,34], ["#ff004d",31,28,27], ["#ff004d",40,35,39], ["#ff004d",31,38,32], ["#ff004d",46,44,45], ["#ff004d",43,39,44], ["#ff004d",46,47,48], ["#ff004d",37,42,38], ["#ff004d",48,51,52], ["#ff004d",49,42,41], ["#ff004d",52,55,56], ["#ff004d",53,50,49], ["#ff004d",56,59,60], ["#ff004d",57,60,59], ["#ff004d",57,62,58], ["#ff004d",66,61,65], ["#ff004d",53,64,54], ["#ff004d",70,65,69], ["#ff004d",67,64,63], ["#ff004d",74,69,73], ["#ff004d",71,68,67], ["#ff004d",77,75,76], ["#ff004d",77,73,78], ["#ff004d",76,72,71], ["#ff004d",80,82,79], ["#ff004d",85,83,84], ["#ff004d",89,87,88], ["#ff004d",85,87,86], ["#ff004d",93,91,92], ["#ff004d",80,94,93], ["#ff004d",89,91,90], ["#ff004d",98,83,97], ["#ff004d",95,82,81], ["#ff004d",98,99,100], ["#ff004d",102,99,101], ["#ff004d",104,101,103], ["#ff004d",104,107,108], ["#ff004d",105,96,95], ["#ff004d",111,109,110], ["#ff004d",108,112,111], ["#ff004d",105,114,106], ["#ff004d",110,117,118], ["#ff004d",115,114,113], ["#ff004d",121,119,120], ["#ff004d",118,122,121], ["#ff004d",124,119,123], ["#ff004d",125,116,115], ["#ff004d",130,123,129], ["#ff004d",125,128,126], ["#ff004d",134,129,133], ["#ff004d",127,132,128], ["#ff004d",136,133,135], ["#ff004d",135,138,136], ["#ff004d",139,138,137], ["#ff004d",140,143,144], ["#ff004d",141,132,131], ["#ff004d",144,147,148], ["#ff004d",141,146,142], ["#ff004d",148,151,152], ["#ff004d",145,150,146], ["#ff004d",154,156,153], ["#ff004d",152,156,155], ["#ff004d",149,153,150], ["#ff004d",1,2,5], ["#ff004d",7,8,3], ["#ff004d",12,9,10], ["#ff004d",12,11,8], ["#ff004d",13,14,15], ["#ff004d",13,6,5], ["#ff004d",16,15,10], ["#ff004d",4,3,19], ["#ff004d",1,17,18], ["#ff004d",24,20,19], ["#ff004d",24,23,25], ["#ff004d",26,25,21], ["#ff004d",30,22,21], ["#ff004d",17,27,28], ["#ff004d",36,33,34], ["#ff004d",33,30,29], ["#ff004d",31,32,28], ["#ff004d",40,36,35], ["#ff004d",31,37,38], ["#ff004d",46,43,44], ["#ff004d",43,40,39], ["#ff004d",46,45,47], ["#ff004d",37,41,42], ["#ff004d",48,47,51], ["#ff004d",49,50,42], ["#ff004d",52,51,55], ["#ff004d",53,54,50], ["#ff004d",56,55,59], ["#ff004d",57,58,60], ["#ff004d",57,61,62], ["#ff004d",66,62,61], ["#ff004d",53,63,64], ["#ff004d",70,66,65], ["#ff004d",67,68,64], ["#ff004d",74,70,69], ["#ff004d",71,72,68], ["#ff004d",77,78,75], ["#ff004d",77,74,73], ["#ff004d",76,75,72], ["#ff004d",80,81,82], ["#ff004d",85,86,83], ["#ff004d",89,90,87], ["#ff004d",85,88,87], ["#ff004d",93,94,91], ["#ff004d",80,79,94], ["#ff004d",89,92,91], ["#ff004d",98,84,83], ["#ff004d",95,96,82], ["#ff004d",98,97,99], ["#ff004d",102,100,99], ["#ff004d",104,102,101], ["#ff004d",104,103,107], ["#ff004d",105,106,96], ["#ff004d",111,112,109], ["#ff004d",108,107,112], ["#ff004d",105,113,114], ["#ff004d",110,109,117], ["#ff004d",115,116,114], ["#ff004d",121,122,119], ["#ff004d",118,117,122], ["#ff004d",124,120,119], ["#ff004d",125,126,116], ["#ff004d",130,124,123], ["#ff004d",125,127,128], ["#ff004d",134,130,129], ["#ff004d",127,131,132], ["#ff004d",136,134,133], ["#ff004d",135,137,138], ["#ff004d",139,140,138], ["#ff004d",140,139,143], ["#ff004d",141,142,132], ["#ff004d",144,143,147], ["#ff004d",141,145,146], ["#ff004d",148,147,151], ["#ff004d",145,149,150], ["#ff004d",154,155,156], ["#ff004d",152,151,156], ["#ff004d",149,154,153], ],
    },
    "E": {
      fstart: models_oxygen_fstart,
      fend: models_oxygen_fend,
      v: [[8.049336,0.131979,-2.730618], [7.973732,-6.1e-05,-2.806223], [8.429147,-6.1e-05,-2.806223], [8.504752,0.131979,-2.730618], [8.049336,-6.1e-05,-3.194213], [8.049336,0.131979,-3.269818], [8.429147,-6.1e-05,-3.194213], [8.504752,0.131979,-3.269818], [7.437772,-6.1e-05,-2.730618], [7.362167,0.131979,-2.730618], [7.362167,0.131979,-3.269818], [7.437772,-6.1e-05,-3.194213], [8.049336,0.131979,-2.237289], [7.973732,-6.1e-05,-2.161684], [7.437772,-6.1e-05,-2.237289], [7.362167,0.131979,-2.237289], [7.973732,-6.1e-05,-1.803268], [8.049336,0.131979,-1.727663], [7.437772,-6.1e-05,-1.727663], [7.362167,0.131979,-1.727663], [8.049336,0.131979,-1.142406], [7.973732,-6.1e-05,-1.0668], [7.437772,-6.1e-05,-1.142406], [7.362167,0.131979,-1.142406], [8.049336,-6.1e-05,-0.682523], [8.049336,0.131979,-0.606918], [7.362167,0.131979,-0.606918], [7.437772,-6.1e-05,-0.682523], [8.400311,-6.1e-05,-2.161684], [8.475917,0.131979,-2.237289], [8.475917,0.131979,-1.727663], [8.400311,-6.1e-05,-1.803268], [8.48,-6.1e-05,-1.0668], [8.555606,0.131979,-1.142406], [8.555606,0.131979,-0.606918], [8.48,-6.1e-05,-0.682523], [8.049336,0.461708,-3.269818], [8.049336,0.593748,-3.194213], [7.973732,0.593748,-2.806223], [8.049336,0.461708,-2.730618], [8.504752,0.461708,-2.730618], [8.429147,0.593748,-2.806223], [8.504752,0.461708,-3.269818], [8.429147,0.593748,-3.194213], [7.437772,0.593748,-3.194213], [7.362167,0.461708,-3.269818], [7.362167,0.461708,-2.730618], [7.437772,0.593748,-2.730618], [7.362167,0.461708,-2.237289], [7.437772,0.593748,-2.237289], [7.973732,0.593748,-2.161684], [8.049336,0.461708,-2.237289], [7.362167,0.461708,-1.727663], [7.437772,0.593748,-1.727663], [8.049336,0.461708,-1.727663], [7.973732,0.593748,-1.803268], [7.362167,0.461708,-1.142406], [7.437772,0.593748,-1.142406], [7.973732,0.593748,-1.0668], [8.049336,0.461708,-1.142406], [7.437772,0.593748,-0.682523], [7.362167,0.461708,-0.606918], [8.049336,0.461708,-0.606918], [8.049336,0.593748,-0.682523], [8.400311,0.593748,-1.803268], [8.475917,0.461708,-1.727663], [8.475917,0.461708,-2.237289], [8.400311,0.593748,-2.161684], [8.48,0.593748,-0.682523], [8.555606,0.461708,-0.606918], [8.555606,0.461708,-1.142406], [8.48,0.593748,-1.0668], ],
      f: [["#ffa300",4,40,1], ["#ffa300",14,9,2], ["#ffa300",1,52,13], ["#ffa300",29,17,14], ["#ffa300",31,55,18], ["#ffa300",33,25,22], ["#ffa300",13,67,30], ["#ffa300",21,71,34], ["#ffa300",48,51,39], ["#ffa300",42,38,39], ["#ffa300",50,56,51], ["#ffa300",56,68,51], ["#ffa300",59,61,64], ["#ffa300",64,72,59], ["#ffa300",54,59,56], ["#ffa300",34,70,35], ["#ffa300",22,19,17], ["#ffa300",20,49,16], ["#ffa300",10,46,11], ["#ffa300",18,60,21], ["#ffa300",24,53,20], ["#ffa300",39,45,48], ["#ffa300",22,28,23], ["#ffa300",5,3,2], ["#ffa300",27,57,24], ["#ffa300",8,41,4], ["#ffa300",35,63,26], ["#ffa300",17,15,14], ["#ffa300",30,66,31], ["#ffa300",6,43,8], ["#ffa300",11,37,6], ["#ffa300",26,62,27], ["#ffa300",16,47,10], ["#ffa300",2,12,5], ["#ffa300",4,41,40], ["#ffa300",14,15,9], ["#ffa300",1,40,52], ["#ffa300",29,32,17], ["#ffa300",31,66,55], ["#ffa300",33,36,25], ["#ffa300",13,52,67], ["#ffa300",21,60,71], ["#ffa300",48,50,51], ["#ffa300",42,44,38], ["#ffa300",50,54,56], ["#ffa300",56,65,68], ["#ffa300",59,58,61], ["#ffa300",64,69,72], ["#ffa300",54,58,59], ["#ffa300",34,71,70], ["#ffa300",22,23,19], ["#ffa300",20,53,49], ["#ffa300",10,47,46], ["#ffa300",18,55,60], ["#ffa300",24,57,53], ["#ffa300",39,38,45], ["#ffa300",22,25,28], ["#ffa300",5,7,3], ["#ffa300",27,62,57], ["#ffa300",8,43,41], ["#ffa300",35,70,63], ["#ffa300",17,19,15], ["#ffa300",30,67,66], ["#ffa300",6,37,43], ["#ffa300",11,46,37], ["#ffa300",26,63,62], ["#ffa300",16,49,47], ["#ffa300",2,9,12], ["#ff004d",3,1,2], ["#ff004d",7,4,3], ["#ff004d",7,6,8], ["#ff004d",12,10,11], ["#ff004d",12,6,5], ["#ff004d",2,13,14], ["#ff004d",15,10,9], ["#ff004d",19,16,15], ["#ff004d",17,21,22], ["#ff004d",23,20,19], ["#ff004d",28,26,27], ["#ff004d",28,24,23], ["#ff004d",29,31,32], ["#ff004d",29,13,30], ["#ff004d",32,18,17], ["#ff004d",36,34,35], ["#ff004d",33,21,34], ["#ff004d",36,26,25], ["#ff004d",40,42,39], ["#ff004d",43,42,41], ["#ff004d",37,44,43], ["#ff004d",47,45,46], ["#ff004d",37,45,38], ["#ff004d",40,51,52], ["#ff004d",49,48,47], ["#ff004d",53,50,49], ["#ff004d",55,59,60], ["#ff004d",57,54,53], ["#ff004d",63,61,62], ["#ff004d",57,61,58], ["#ff004d",67,65,66], ["#ff004d",52,68,67], ["#ff004d",55,65,56], ["#ff004d",71,69,70], ["#ff004d",60,72,71], ["#ff004d",63,69,64], ["#ff004d",3,4,1], ["#ff004d",7,8,4], ["#ff004d",7,5,6], ["#ff004d",12,9,10], ["#ff004d",12,11,6], ["#ff004d",2,1,13], ["#ff004d",15,16,10], ["#ff004d",19,20,16], ["#ff004d",17,18,21], ["#ff004d",23,24,20], ["#ff004d",28,25,26], ["#ff004d",28,27,24], ["#ff004d",29,30,31], ["#ff004d",29,14,13], ["#ff004d",32,31,18], ["#ff004d",36,33,34], ["#ff004d",33,22,21], ["#ff004d",36,35,26], ["#ff004d",40,41,42], ["#ff004d",43,44,42], ["#ff004d",37,38,44], ["#ff004d",47,48,45], ["#ff004d",37,46,45], ["#ff004d",40,39,51], ["#ff004d",49,50,48], ["#ff004d",53,54,50], ["#ff004d",55,56,59], ["#ff004d",57,58,54], ["#ff004d",63,64,61], ["#ff004d",57,62,61], ["#ff004d",67,68,65], ["#ff004d",52,51,68], ["#ff004d",55,66,65], ["#ff004d",71,72,69], ["#ff004d",60,59,72], ["#ff004d",63,70,69], ],
    },
    "N": {
      fstart: models_oxygen_fstart,
      fend: models_oxygen_fend,
      v: [[8.845105,-6.1e-05,-0.679901], [8.7695,0.131979,-0.604295], [9.264774,-6.1e-05,-0.679901], [9.34038,0.131979,-0.604295], [8.7695,0.131979,-1.809405], [8.845105,-6.1e-05,-1.809405], [9.264774,-6.1e-05,-2.137882], [9.34038,0.131979,-1.809405], [8.845105,-6.1e-05,-3.175215], [8.7695,0.131979,-3.265], [9.34038,0.131979,-3.265], [9.34038,-6.1e-05,-3.174647], [9.735525,-6.1e-05,-0.686142], [9.735525,0.131979,-0.59579], [9.735525,0.131979,-2.051384], [9.811131,-6.1e-05,-1.722907], [10.303123,0.131979,-0.59579], [10.227517,-6.1e-05,-0.685575], [10.227517,-6.1e-05,-2.051384], [10.303123,0.131979,-2.051384], [9.811131,-6.1e-05,-3.179368], [9.735525,0.131979,-3.254973], [10.303123,0.131979,-3.254973], [10.227517,-6.1e-05,-3.179368], [8.845105,0.593748,-1.809405], [8.7695,0.461708,-1.809405], [8.7695,0.461708,-0.604295], [8.845105,0.593748,-0.679901], [9.34038,0.461708,-0.604295], [9.264774,0.593748,-0.679901], [9.34038,0.461708,-1.809405], [9.264774,0.593748,-2.137882], [9.34038,0.593748,-3.174647], [9.34038,0.461708,-3.265], [8.7695,0.461708,-3.265], [8.845105,0.593748,-3.175215], [9.735525,0.461708,-0.59579], [9.735525,0.593748,-0.686142], [9.811131,0.593748,-1.722907], [9.735525,0.461708,-2.051384], [10.227517,0.593748,-0.685575], [10.303123,0.461708,-0.59579], [10.303123,0.461708,-2.051384], [10.227517,0.593748,-2.051384], [10.227517,0.593748,-3.179368], [10.303123,0.461708,-3.254973], [9.735525,0.461708,-3.254973], [9.811131,0.593748,-3.179368], ],
      f: [["#ffa300",4,27,2], ["#ffa300",5,35,10], ["#ffa300",14,31,8], ["#ffa300",17,37,14], ["#ffa300",15,47,22], ["#ffa300",32,36,25], ["#ffa300",32,39,33], ["#ffa300",39,41,44], ["#ffa300",44,48,39], ["#ffa300",10,34,11], ["#ffa300",30,25,28], ["#ffa300",23,43,20], ["#ffa300",6,3,1], ["#ffa300",20,42,17], ["#ffa300",11,40,15], ["#ffa300",8,29,4], ["#ffa300",16,18,13], ["#ffa300",22,46,23], ["#ffa300",16,7,12], ["#ffa300",21,19,16], ["#ffa300",9,7,6], ["#ffa300",2,26,5], ["#ffa300",4,29,27], ["#ffa300",5,26,35], ["#ffa300",14,37,31], ["#ffa300",17,42,37], ["#ffa300",15,40,47], ["#ffa300",32,33,36], ["#ffa300",32,38,39], ["#ffa300",39,38,41], ["#ffa300",44,45,48], ["#ffa300",10,35,34], ["#ffa300",30,32,25], ["#ffa300",23,46,43], ["#ffa300",6,7,3], ["#ffa300",20,43,42], ["#ffa300",11,34,40], ["#ffa300",8,31,29], ["#ffa300",16,19,18], ["#ffa300",22,47,46], ["#ffa300",16,13,7], ["#ffa300",21,24,19], ["#ffa300",9,12,7], ["#ffa300",2,27,26], ["#ff004d",1,5,6], ["#ff004d",3,2,1], ["#ff004d",3,8,4], ["#ff004d",9,11,12], ["#ff004d",9,5,10], ["#ff004d",12,15,16], ["#ff004d",13,8,7], ["#ff004d",18,20,17], ["#ff004d",18,14,13], ["#ff004d",21,23,24], ["#ff004d",21,15,22], ["#ff004d",24,20,19], ["#ff004d",26,28,25], ["#ff004d",27,30,28], ["#ff004d",31,30,29], ["#ff004d",34,36,33], ["#ff004d",26,36,35], ["#ff004d",40,33,39], ["#ff004d",31,38,32], ["#ff004d",43,41,42], ["#ff004d",37,41,38], ["#ff004d",47,45,46], ["#ff004d",40,48,47], ["#ff004d",43,45,44], ["#ff004d",1,2,5], ["#ff004d",3,4,2], ["#ff004d",3,7,8], ["#ff004d",9,10,11], ["#ff004d",9,6,5], ["#ff004d",12,11,15], ["#ff004d",13,14,8], ["#ff004d",18,19,20], ["#ff004d",18,17,14], ["#ff004d",21,22,23], ["#ff004d",21,16,15], ["#ff004d",24,23,20], ["#ff004d",26,27,28], ["#ff004d",27,29,30], ["#ff004d",31,32,30], ["#ff004d",34,35,36], ["#ff004d",26,25,36], ["#ff004d",40,34,33], ["#ff004d",31,37,38], ["#ff004d",43,44,41], ["#ff004d",37,42,41], ["#ff004d",47,48,45], ["#ff004d",40,39,48], ["#ff004d",43,46,45], ],
    },
    "E1": {
      fstart: models_oxygen_fstart,
      fend: models_oxygen_fend,
      v: [[11.376164,0.131979,-2.730618], [11.300559,-6.1e-05,-2.806223], [11.755975,-6.1e-05,-2.806223], [11.83158,0.131979,-2.730618], [11.376164,-6.1e-05,-3.194213], [11.376164,0.131979,-3.269818], [11.755975,-6.1e-05,-3.194213], [11.83158,0.131979,-3.269818], [10.764601,-6.1e-05,-2.730618], [10.688995,0.131979,-2.730618], [10.688995,0.131979,-3.269818], [10.764601,-6.1e-05,-3.194213], [11.376164,0.131979,-2.237289], [11.300559,-6.1e-05,-2.161684], [10.764601,-6.1e-05,-2.237289], [10.688995,0.131979,-2.237289], [11.300559,-6.1e-05,-1.803268], [11.376164,0.131979,-1.727663], [10.764601,-6.1e-05,-1.727663], [10.688995,0.131979,-1.727663], [11.376164,0.131979,-1.142406], [11.300559,-6.1e-05,-1.0668], [10.764601,-6.1e-05,-1.142406], [10.688995,0.131979,-1.142406], [11.376164,-6.1e-05,-0.682523], [11.376164,0.131979,-0.606918], [10.688995,0.131979,-0.606918], [10.764601,-6.1e-05,-0.682523], [11.727139,-6.1e-05,-2.161684], [11.802745,0.131979,-2.237289], [11.802745,0.131979,-1.727663], [11.727139,-6.1e-05,-1.803268], [11.806828,-6.1e-05,-1.0668], [11.882434,0.131979,-1.142406], [11.882434,0.131979,-0.606918], [11.806828,-6.1e-05,-0.682523], [11.376164,0.461708,-3.269818], [11.376164,0.593748,-3.194213], [11.300559,0.593748,-2.806223], [11.376164,0.461708,-2.730618], [11.83158,0.461708,-2.730618], [11.755975,0.593748,-2.806223], [11.83158,0.461708,-3.269818], [11.755975,0.593748,-3.194213], [10.764601,0.593748,-3.194213], [10.688995,0.461708,-3.269818], [10.688995,0.461708,-2.730618], [10.764601,0.593748,-2.730618], [10.688995,0.461708,-2.237289], [10.764601,0.593748,-2.237289], [11.300559,0.593748,-2.161684], [11.376164,0.461708,-2.237289], [10.688995,0.461708,-1.727663], [10.764601,0.593748,-1.727663], [11.376164,0.461708,-1.727663], [11.300559,0.593748,-1.803268], [10.688995,0.461708,-1.142406], [10.764601,0.593748,-1.142406], [11.300559,0.593748,-1.0668], [11.376164,0.461708,-1.142406], [10.764601,0.593748,-0.682523], [10.688995,0.461708,-0.606918], [11.376164,0.461708,-0.606918], [11.376164,0.593748,-0.682523], [11.727139,0.593748,-1.803268], [11.802745,0.461708,-1.727663], [11.802745,0.461708,-2.237289], [11.727139,0.593748,-2.161684], [11.806828,0.593748,-0.682523], [11.882434,0.461708,-0.606918], [11.882434,0.461708,-1.142406], [11.806828,0.593748,-1.0668], ],
      f: [["#ffa300",4,40,1], ["#ffa300",14,9,2], ["#ffa300",1,52,13], ["#ffa300",29,17,14], ["#ffa300",31,55,18], ["#ffa300",33,25,22], ["#ffa300",13,67,30], ["#ffa300",21,71,34], ["#ffa300",48,51,39], ["#ffa300",42,38,39], ["#ffa300",50,56,51], ["#ffa300",56,68,51], ["#ffa300",59,61,64], ["#ffa300",64,72,59], ["#ffa300",54,59,56], ["#ffa300",34,70,35], ["#ffa300",22,19,17], ["#ffa300",20,49,16], ["#ffa300",10,46,11], ["#ffa300",18,60,21], ["#ffa300",24,53,20], ["#ffa300",39,45,48], ["#ffa300",22,28,23], ["#ffa300",5,3,2], ["#ffa300",27,57,24], ["#ffa300",8,41,4], ["#ffa300",35,63,26], ["#ffa300",17,15,14], ["#ffa300",30,66,31], ["#ffa300",6,43,8], ["#ffa300",11,37,6], ["#ffa300",26,62,27], ["#ffa300",16,47,10], ["#ffa300",2,12,5], ["#ffa300",4,41,40], ["#ffa300",14,15,9], ["#ffa300",1,40,52], ["#ffa300",29,32,17], ["#ffa300",31,66,55], ["#ffa300",33,36,25], ["#ffa300",13,52,67], ["#ffa300",21,60,71], ["#ffa300",48,50,51], ["#ffa300",42,44,38], ["#ffa300",50,54,56], ["#ffa300",56,65,68], ["#ffa300",59,58,61], ["#ffa300",64,69,72], ["#ffa300",54,58,59], ["#ffa300",34,71,70], ["#ffa300",22,23,19], ["#ffa300",20,53,49], ["#ffa300",10,47,46], ["#ffa300",18,55,60], ["#ffa300",24,57,53], ["#ffa300",39,38,45], ["#ffa300",22,25,28], ["#ffa300",5,7,3], ["#ffa300",27,62,57], ["#ffa300",8,43,41], ["#ffa300",35,70,63], ["#ffa300",17,19,15], ["#ffa300",30,67,66], ["#ffa300",6,37,43], ["#ffa300",11,46,37], ["#ffa300",26,63,62], ["#ffa300",16,49,47], ["#ffa300",2,9,12], ["#ff004d",3,1,2], ["#ff004d",7,4,3], ["#ff004d",7,6,8], ["#ff004d",12,10,11], ["#ff004d",12,6,5], ["#ff004d",2,13,14], ["#ff004d",15,10,9], ["#ff004d",19,16,15], ["#ff004d",17,21,22], ["#ff004d",23,20,19], ["#ff004d",28,26,27], ["#ff004d",28,24,23], ["#ff004d",29,31,32], ["#ff004d",29,13,30], ["#ff004d",32,18,17], ["#ff004d",36,34,35], ["#ff004d",33,21,34], ["#ff004d",36,26,25], ["#ff004d",40,42,39], ["#ff004d",43,42,41], ["#ff004d",37,44,43], ["#ff004d",47,45,46], ["#ff004d",37,45,38], ["#ff004d",40,51,52], ["#ff004d",49,48,47], ["#ff004d",53,50,49], ["#ff004d",55,59,60], ["#ff004d",57,54,53], ["#ff004d",63,61,62], ["#ff004d",57,61,58], ["#ff004d",67,65,66], ["#ff004d",52,68,67], ["#ff004d",55,65,56], ["#ff004d",71,69,70], ["#ff004d",60,72,71], ["#ff004d",63,69,64], ["#ff004d",3,4,1], ["#ff004d",7,8,4], ["#ff004d",7,5,6], ["#ff004d",12,9,10], ["#ff004d",12,11,6], ["#ff004d",2,1,13], ["#ff004d",15,16,10], ["#ff004d",19,20,16], ["#ff004d",17,18,21], ["#ff004d",23,24,20], ["#ff004d",28,25,26], ["#ff004d",28,27,24], ["#ff004d",29,30,31], ["#ff004d",29,14,13], ["#ff004d",32,31,18], ["#ff004d",36,33,34], ["#ff004d",33,22,21], ["#ff004d",36,35,26], ["#ff004d",40,41,42], ["#ff004d",43,44,42], ["#ff004d",37,38,44], ["#ff004d",47,48,45], ["#ff004d",37,46,45], ["#ff004d",40,39,51], ["#ff004d",49,50,48], ["#ff004d",53,54,50], ["#ff004d",55,56,59], ["#ff004d",57,58,54], ["#ff004d",63,64,61], ["#ff004d",57,62,61], ["#ff004d",67,68,65], ["#ff004d",52,51,68], ["#ff004d",55,66,65], ["#ff004d",71,72,69], ["#ff004d",60,59,72], ["#ff004d",63,70,69], ],
    }
  };

  let a = 0.5;
  let nMult = [a, a, a, a, a, a, a, 0]
  let n = 0;
	for (var m in models_oxygen) {
		for (var v in models_oxygen[m]['v']) {
			models_oxygen[m]['v'][v][0] = (models_oxygen[m]['v'][v][0] - 4.5) + n * nMult[n] - 1.45;
			models_oxygen[m]['v'][v][1] -= 0;
			models_oxygen[m]['v'][v][2] += 1.565;
      models_oxygen[m]['v'][v][1] *= 1.5;
      models_oxygen[m]['v'][v][2] *= 1.05;
			models_oxygen[m]['v'][v] = rotX(models_oxygen[m]['v'][v], -90);
		}
    n++;
	}
  for (let m in models_oxygen) {
    models[m] = models_oxygen[m];
  }
  
}


  /*"Cube": {
    v: [[2.84759,1.0,-1.0], [2.84759,-1.0,-1.0], [2.84759,1.0,1.0], [2.84759,-1.0,1.0], [-2.84759,1.0,-1.0], [-2.84759,-1.0,-1.0], [-2.84759,1.0,1.0], [-2.84759,-1.0,1.0], [-8.009942,-1.0,-1.0], [-8.009942,-1.0,1.0], [-8.009942,1.0,1.0], [-8.009942,1.0,-1.0], [-13.306188,-1.0,-1.0], [-13.306188,-1.0,1.0], [-13.306188,1.0,1.0], [-13.306188,1.0,-1.0], [-18.722565,-1.0,-1.0], [-18.722565,-1.0,1.0], [-18.722565,1.0,1.0], [-18.722565,1.0,-1.0], [-24.094233,-1.0,-1.0], [-24.094233,-1.0,1.0], [-24.094233,1.0,1.0], [-24.094233,1.0,-1.0], ],
    f: [["#ff77a8",8,10,7], ["#ff77a8",6,9,8], ["#ff77a8",7,11,5], ["#ff77a8",5,12,6], ["#ff77a8",20,24,17], ["#ff77a8",17,21,18], ["#ff77a8",19,23,20], ["#ff77a8",18,22,19], ["#ff77a8",10,11,7], ["#ff77a8",9,10,8], ["#ff77a8",11,12,5], ["#ff77a8",12,9,6], ["#ff77a8",24,21,17], ["#ff77a8",21,22,18], ["#ff77a8",23,24,20], ["#ff77a8",22,23,19], ["#ab5236",1,3,5], ["#ab5236",4,8,3], ["#ab5236",6,8,2], ["#ab5236",6,2,5], ["#ab5236",3,7,5], ["#ab5236",8,7,3], ["#ab5236",8,4,2], ["#ab5236",2,1,5], ["#ffa300",12,16,9], ["#ffa300",9,13,10], ["#ffa300",11,15,12], ["#ffa300",10,14,11], ["#ffa300",16,13,9], ["#ffa300",13,14,10], ["#ffa300",15,16,12], ["#ffa300",14,15,11], ["#ab5236",15,19,16], ["#ab5236",14,18,15], ["#ab5236",16,20,13], ["#ab5236",13,17,14], ["#ab5236",19,20,16], ["#ab5236",18,19,15], ["#ab5236",20,17,13], ["#ab5236",17,18,14], ],
  },*/


// вспомогательная функция для смены палитры
// чтобы лучше при наложении было видно
function changeColors(colors) {
  let colorsNew = [];
  for (let c in colors) {
    colorsNew.push(
      '#' + colors[c].substr(5,2)
          + colors[c].substr(3,2)
          + colors[c].substr(1,2)
    );
  }
  return colorsNew;
}