/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Contrato from './Formulario/contrato';
import Empleado from './Formulario/empleado';
import Pago from './Formulario/pago';
AppRegistry.registerComponent(appName, () =>Pago);
