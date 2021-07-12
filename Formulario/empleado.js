import  React, {Component} from 'react';
import {  Text, TextInput, TouchableHighlight, View, StyleSheet} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';



class Empleado extends Component{
    constructor(){
        super(),

        this.state = {
            cedula: '',
            nombre: '',
            apellido: '',
            direccion:'',
            telefono:'',
            tableHead: ['Cedula', 'Nombres', 'Apellidos', 'Dirección', 'Telefono'],
            tableData: [
                
            ]
        }
    }

    limpiar = () =>{
        this.setState({
            cedula:'',
            nombre:'',
            apellido:'',
            direccion:'',
            telefono:''
        })
    }

    /*delete = (indice) =>{
        var tabla = this.state.tableData
        tabla.splice(1,indice)
        this.setState({tableData:tabla})
    } */

    onSubmit = () =>{
        var data = [this.state.cedula,this.state.nombre,this.state.apellido,this.state.direccion, this.state.telefono]
        var tabla = this.state.tableData
        tabla[tabla.length] = data
        this.setState({tableData:tabla})
        this.limpiar()
    }
    render(){
        return(
            <View style= {styles.container}>
                <View style= {styles.listado}>
                    <Text style={styles.title}>Registro de nuevos empleados</Text>
                    <TextInput
                        style={styles.input}
                        placeholder= "Cedula Empleado"
                        value={this.state.cedula}
                        onChangeText={cedula => this.setState({cedula})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder= "Nombres Empleado"
                        value={this.state.nombre}
                        onChangeText={nombre => this.setState({nombre})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder= "Apellidos Empleado"
                        value={this.state.apellido}
                        onChangeText={apellido => this.setState({apellido})}
                    />
                    <TextInput
                    multiline= {true}
                    style={[styles.input, styles.textArea]}
                        placeholder= "Direccion Empleado"
                        value={this.state.direccion}
                        onChangeText={direccion => this.setState({direccion})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder= "Telefono Empleado"
                        value={this.state.telefono}
                        onChangeText={telefono => this.setState({telefono})}
                    />
                    <TouchableHighlight
                    style={styles.button}
                    onPress={this.onSubmit}
                    >
                        <Text style={styles.textButton}>GUARDAR</Text>
                    </TouchableHighlight>
                </View>
                    <Table borderStyle={{borderWidth: 4, borderColor: '#424949'}}>
                    <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={this.state.tableData} textStyle={styles.text}/>
                    </Table>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFEFE',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 30
    },
    input:{
        height: 40,
        borderColor: '#808B96',
        borderWidth: 2,
        marginBottom: 20
    },
    textArea:{
        height: 60
    },
    title:{
        textAlign:'center',
        fontSize: 18,
        marginBottom: 5
    },
    button:{
        backgroundColor: '#2874A6',
        paddingTop: 15,
        paddingBottom: 15
    },
    textButton:{
        textAlign:'center',
        color: 'white'
    },
    listado:{
        marginBottom: 40
    }
})

export default Empleado;