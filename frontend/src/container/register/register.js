import React, { Component } from 'react';
import axios from 'axios';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { IconBase } from 'react-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const myStyle={
    backgroundImage: 
    "url('/images/register-circle.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

export class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            'nama': '',
            'username': '',
            'password': '',
            'email': '',
            'daftar': '',
            'asal_sekolah': '',
            'tau': '',
        }
    }
    
    handlerChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    
    handlerSubmit = async (e) => {
        e.preventDefault();

        // NOTES
        // Spreadsheet original: https://docs.google.com/spreadsheets/d/1VBxXdd7rOk2UdxuiCVVxWv99GKrIVlHg0zXzrNsFUGY/edit?usp=sharing
        // Connection URL sheet.best: https://sheet.best/api/sheets/9914b376-6b82-45d8-8585-025488fd232c
        
        // Kalau mau ganti spreadsheet, ke link ini aja
        // https://sheet.best/

        // 1. bikin aku
        // 2. bikin new connection
        // 3. copy connection urlnya, terus taro di post ini

        // atau cek tutorial: https://www.freecodecamp.org/news/react-and-googlesheets/

        axios.post('https://sheet.best/api/sheets/9914b376-6b82-45d8-8585-025488fd232c', this.state).then(() => {
            toast("Berhasil Daftar");
        });
        
        setTimeout(function(){
            window.location.href = '/';
        }, 7000);
    }

    movePage() {
        window.location.href = '/';
    }

    render() {
        const {nama, username, password, email, daftar, asal_sekolah, tau} = this.state
        return (
            <>
                <div className="lg:p-10 pb-16 lg:pb-36 grid grid-1 lg:grid-cols-2 bg-background">
                    <div>
                        <img src="/images/register.svg" alt="register" />
                    </div>
                    <form style={myStyle} className="p-10 bg-white rounded-lg shadow-md w-3/4 mx-auto" onSubmit={this.handlerSubmit}>
                        <h2 className="text-2xl font-bold font-open-sans text-center text-register-title-oren lg:pb-4">Register</h2>
                        <div className="mb-6">
                            <label className="block text-lg font-header font-roboto mb-2 text-register-subtitle-oren font-semibold">Nama</label>
                            <input className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="nama" type="text" placeholder="Nama" onChange={this.handlerChange} value={nama} required/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-lg font-header font-roboto mb-2 text-register-subtitle-oren font-semibold">Username</label>
                            <input className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="username" type="text" placeholder="Username" onChange={this.handlerChange} value={username} required/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-lg font-header font-roboto mb-2 text-register-subtitle-oren font-semibold">Password</label>
                            <input className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="Password" onChange={this.handlerChange} value={password} required/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-lg font-header font-roboto mb-2 text-register-subtitle-oren font-semibold">Email</label>
                            <input className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="email" type="text" text="Email" placeholder="Email" onChange={this.handlerChange} value={email} required/>
                        </div>
                        <div className="inline-block relative mb-6">
                            <label className="block text-lg font-header font-roboto mb-2 text-register-subtitle-oren font-semibold">Daftar Apa?</label>
                            <select className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="daftar" type="varchar" placeholder="daftar-apa" onChange={this.handlerChange} required>
                                <option value={daftar} className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">Daftar Apa?</option>
                                <option name="sbmptn">Pelatihan SBMPTN</option>
                                <option name="ksn">Pelatihan KSN</option>
                                <option name="sbmptn-ksn">Pelatihan SBMPTN dan KSN</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label className="block text-lg font-header font-roboto mb-2 text-register-subtitle-oren font-semibold">Asal Sekolah</label>
                            <input className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="asal_sekolah" type="text" placeholder="Asal Sekolah" onChange={this.handlerChange} value={asal_sekolah} required/>
                        </div>
                        <div className="inline-block relative mb-6">
                            <label className="block text-lg font-header font-roboto mb-2 text-register-subtitle-oren font-semibold">Tau Ocademy Darimana?</label>
                            <select className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="tau" type="varchar" placeholder="Tau Darimana" onChange={this.handlerChange} required>
                                <option value={tau} className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">Tau Ocademy Darimana?</option>
                                <option name="teman">Teman</option>
                                <option name="keluarga">Keluarga</option>
                                <option name="social-media">Social Media Ocademy</option>
                                <option name="lainnya">Lainnya</option>
                            </select>
                        </div>
                        
                        <div className="flex justify-center">
                            <button type="submit" className="w-32 bg-oren3 rounded-lg hover:bg-yellow-700 focus:outline-none m-5 mx-auto grid justify-items-center">
                                <p className="text-lg py-1 text-white font-roboto ">Daftar</p>
                            </button>
                            <ToastContainer closeButton={false} onClick={this.movePage}/>
                        </div>
                        <div className="flex justify-center p-3 text-register-subtitle-oren">
                            <p className="text-center">Sudah Punya Akun?<a href='/' className="font-bold"> Login</a></p>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default Register;