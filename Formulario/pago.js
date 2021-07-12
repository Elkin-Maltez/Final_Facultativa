import  React, {Component} from 'react';
import {  Text, TextInput, TouchableHighlight, View, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';



class Pago extends Component{
    constructor(){
        super(),

        this.state = {
            numero: '',
            nombre: '',
            apellido: '',
            subtotal:'',
            total: '',
            tableHead: ['Nombres', 'Apellidos', 'Contrato', 'Total'],
            tableData: [
                
            ]
        }
    }

    limpiar = () =>{
        this.setState({
            numero: '',
            nombre: '',
            apellido: '',
            subtotal:'',
            total: ''
        })
    }

    /*delete = (indice) =>{
        var tabla = this.state.tableData
        tabla.splice(1,indice)
        this.setState({tableData:tabla})
    } */

    onSubmit = () =>{
        var data = [this.state.numero,this.state.nombre,this.state.apellido, this.state.total]
        var tabla = this.state.tableData
        tabla[tabla.length] = data
        this.setState({tableData:tabla})
        this.limpiar()
    }
    render(){
        return(
            <View style= {styles.container}>
                <View style= {styles.listado}>
                    <Text style={styles.title}>Registro de pago</Text>
                    <TextInput
                        style={styles.input}
                        placeholder= "Numero Contrato"
                        value={this.state.numero}
                        onChangeText={numero => this.setState({numero})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder= "Nombres Cliente"
                        value={this.state.nombre}
                        onChangeText={nombre => this.setState({nombre})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder= "Apellidos Cliente"
                        value={this.state.apellido}
                        onChangeText={apellido => this.setState({apellido})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder= "Subtotal"
                        value={this.state.subtotal}
                        onChangeText={subtotal => this.setState({subtotal})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder= "Total"
                        value={this.state.total}
                        onChangeText={total => this.setState({total})}
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
        marginBottom: 20
    }
})

export default Pago;