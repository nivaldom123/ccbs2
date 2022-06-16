import React from 'react';
import useAppDispatch from './useDispatch';
import useAppSelector from './useSelector';
import currency from 'store/slices/currency';
import _currency from 'store/selector/_currency';
import { debounce } from "lodash"
/**
 * useCurrency Hook
 * @returns 
 */
const useCurrency = () => {
      const { primaryCode, secondryCode } = useAppSelector(_currency)
      const dispatch = useAppDispatch()
      /**************************
      Handler Base Currency
      ***************************/
      const _updateBaseCurrency = React.useCallback((payload: string) => {
            dispatch(currency.actions.updatePrimaryCode(payload))
      }, [primaryCode])
      const updatePrimaryCode = debounce((payload) => _updateBaseCurrency(payload), 100)
      /**************************
     Handler Second Currency
     ***************************/
      const _updateSecondCurrency = React.useCallback((payload: string) => {
            dispatch(currency.actions.updateSecondryCode(payload))
      }, [secondryCode])
      const updateSecondryCode = debounce((payload) => _updateSecondCurrency(payload), 100)
      // Return Values
      return {
            primaryCode,
            secondryCode,
            updatePrimaryCode,
            updateSecondryCode
      }


}
export default useCurrency;