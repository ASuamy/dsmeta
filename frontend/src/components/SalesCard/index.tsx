import './styles.css';
import NotificationButton from '../NotificationButton';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate()-365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>

                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="dsmeta-col-id">ID</th>
                                <th className="dsmeta-col-data">Data</th>
                                <th>Vendedor</th>
                                <th className="dsmeta-col-visitas">Visitas</th>
                                <th className="dsmeta-col-vendas">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="dsmeta-col-id">#123</td>
                                <td className="dsmeta-col-data">12/07/22</td>
                                <td>Anakin</td>
                                <td className="dsmeta-col-visitas">11</td>
                                <td className="dsmeta-col-vendas">35</td>
                                <td>R$55300</td>
                                <td>
                                    <div className="dsmeta-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="dsmeta-col-id">#123</td>
                                <td className="dsmeta-col-data">12/07/22</td>
                                <td>Anakin</td>
                                <td className="dsmeta-col-visitas">11</td>
                                <td className="dsmeta-col-vendas">35</td>
                                <td>R$55300</td>
                                <td>
                                    <div className="dsmeta-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="dsmeta-col-id">#123</td>
                                <td className="dsmeta-col-data">12/07/22</td>
                                <td>Anakin</td>
                                <td className="dsmeta-col-visitas">11</td>
                                <td className="dsmeta-col-vendas">35</td>
                                <td>R$55300</td>
                                <td>
                                    <div className="dsmeta-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )

}

export default SalesCard;
