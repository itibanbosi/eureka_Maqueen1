enum direction {
    前,
    右,
    左,
    止まる,
}

//% color="#3943c6" block="ﾕｰﾚｶ･ｶｰVer1.3" icon="\uf1b9"

namespace eureka_blocks_car {



//% color="#3943c6" weight=70　blockId=servos_direction
//% block="進行方向 |%sinkou_houkou| 動作時間|%time_sec| 秒" group="2　基本の動き"
export function car_derection_time(sinkou_houkou: direction, time_sec: number): void {
    switch (sinkou_houkou) {
        case direction.前:
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100);
            basic.pause(time_sec * 1000);
            maqueen.motorStop(maqueen.Motors.All);
            basic.pause(100);
            break;


        case direction.左:
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0);
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100);
            basic.pause(time_sec * 1000);
            maqueen.motorStop(maqueen.Motors.All);
            basic.pause(100);
            break;
        case direction.右:
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100);
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0);
            basic.pause(time_sec * 1000);
            maqueen.motorStop(maqueen.Motors.All);
            basic.pause(100);
            break;
        case direction.止まる:
            maqueen.motorStop(maqueen.Motors.All);
            basic.pause(100);
            break;
    }
}



}


