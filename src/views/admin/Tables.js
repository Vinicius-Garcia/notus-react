import React from "react";

// components


export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4 md:pt-32 w-full pt">
        
      <label>Nome do Produto</label>
      <input type="text" placeholder="Search.." name="search" className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
      
      <label>Quantidade</label>
      <input type="number" placeholder="Search.." name="search" className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
      
      <label>Preço</label>
      <input type="text" placeholder="Search.." name="search" className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
      
      <label>Categoria</label>
      <input type="text" placeholder="Search.." name="search" className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>

      




      </div>
      <div styles="display:flex; flex-direction:column">
        <button>
          Cancelar
        </button>
        <button>
          Salvar
        </button>
      </div>

    </>
  );
}
