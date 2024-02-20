import React from 'react';
import { observer } from 'mobx-react';
import './App.css';

const MiComponente = observer(() => {
  return (
    <div className="miComponente">
      <h1 className="titulo">Hola, Mundo!</h1>
      <p className="parrafo">Esto es un ejemplo usando MobX con React.</p>
    </div>
  );
});

export default MiComponente;
