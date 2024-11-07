
import React from 'react'
import { useState } from 'react'

function TogglePanel ( {panelBtnFirst, panelBtnSecond, panelContentId}) {

    const [panelItem, setPanelItem] = useState(panelBtnFirst);
    const btnStyles = {
        padding: '.5rem 1rem',
        border: 0,
        cursor: 'pointer', 
    }
    const content = {
        'wb-overview': {
            panelOne: <ul>
                        <li>ByBit</li>
                        <li>Binance</li>
                     </ul>,
            panelTwo: <div>
                            <p>
                                Our DEX Pool updates in real time, supporting a dynamic
                                list of pairs on the Ethereum chain, including but not
                                limited to:
                            </p>
                            <ul>
                                <li>Uniswap V1, V2, V3</li>
                                <li>SushiSwap</li>
                                <li>PancakeSwap</li>
                                <li>ShibaSwap</li>
                            </ul>
                            <p>
                                More DEXs will be added soon, with priority given to user
                                requests.
                            </p>
                        </div>
        }
        
    }
    return (
        <div className='panel'>
            <div className='top-drawer'>
                <button style={btnStyles} onClick={() => setPanelItem(panelBtnFirst)}>{panelBtnFirst}</button>
                <button style={btnStyles} onClick={() => setPanelItem(panelBtnSecond)}>{panelBtnSecond}</button>
            </div>
            <div className='panelContent'>
                {
                    panelItem === panelBtnFirst ? content[panelContentId].panelOne :  content[panelContentId].panelTwo
                }
            </div>
        </div>
  )
}

export default TogglePanel;