import squaresImg from '@/assets/icons/Squares.png';
import trianglesImg from '@/assets/icons/Triangles.png';
import { Button } from 'antd';

import heroImg from '@/assets/icons/hero.png'
export default function Thanks() {

    const boxStyle = {
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid #304755',
        borderRadius: '15px'
    }


    const btnStyle = {
        background: 'none',
        border: '1px solid #8192c7'
    }


    return (
        <>
            <div className="w-900px overflow-hidden" style={boxStyle}>
                <div className="title h-60px flex-center  color-white relative mb-28px" style={{ background: 'rgba(5, 19, 29, 0.6)' }}>
                    <img src={squaresImg} width={10} alt="" className='absolute top-11px left-15px' />
                    <span className='ml-38px text-18px'>PAYMENT SUCCESSFUL</span>
                    <img src={trianglesImg} width={14} alt="" className='absolute top-11px right-15px' />
                </div>
                <div className="main flex-col flex-center" >
                    <p className='text-light text-50px'>THANKS YOU!</p>
                    <img src={heroImg} width={260} alt="" className='mt-20px mb-20px' />
                    <p className='text-22px color-white mb-20px'>Please login to the game and collect items through email.</p>
                </div>

                <div className="btns flex-center h-90px" style={{ background: 'rgba(5, 19, 29, 0.6)' }}>
                    <Button type="primary" className='btn w-230px h-50px mr-30px color-text' style={btnStyle}>CLOSE</Button>
                    <Button type="primary" className='btn w-230px h-50px color-text' style={btnStyle}>SAVE PROFILE</Button>
                </div>
            </div>
        </>
    );
}
