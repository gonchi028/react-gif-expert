import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {
  test('debe de agregar una busqueda a la app', () => {
    render(<GifExpertApp />);
    // screen.debug();
    fireEvent.input(screen.getByRole('textbox'), { target: { value: 'Saitama' }});
    fireEvent.submit(screen.getByRole('form'));
    
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
  });
  test('no debe de renderizar busquedas repetidas', () => {
    render(<GifExpertApp />)
    
    fireEvent.input(screen.getByRole('textbox'), { target: { value: 'Saitama' }});
    fireEvent.submit(screen.getByRole('form'));
    fireEvent.input(screen.getByRole('textbox'), { target: { value: 'Saitama' }});
    fireEvent.submit(screen.getByRole('form'));

    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
  });
});
