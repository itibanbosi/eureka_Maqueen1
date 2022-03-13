enum direction {
    前,
    右,
    左,
    止まる,
}

//% color="#3943c6" block="Eureka Maqueen" icon="\uf1b9"

namespace eureka_blocks_car {
//% color="#3943c6" weight=70　blockId=servos_direction
//% block="|%sinkou_houkou|へ |%time_sec|秒間進む 出力|%Power|" group="2　基本の動き"
//% advanced=true
//% Power.min=0 Power.max=255
export function car_derection_time(sinkou_houkou: direction, time_sec: number,Power:number): void {
    switch (sinkou_houkou) {
        case direction.前:
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW,Power );
            basic.pause(time_sec * 1000);
            maqueen.motorStop(maqueen.Motors.All);
            basic.pause(100);
            break;


        case direction.左:
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0);
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Power);
            basic.pause(time_sec * 1000);
            maqueen.motorStop(maqueen.Motors.All);
            basic.pause(100);
            break;
        case direction.右:
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Power);
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


