import React from 'react';
import amount from 'store/slices/amount';
import useAppDispatch from './useDispatch';
import useAppSelector from './useSelector';
import _amount from 'store/selector/_amount';
import { debounce } from "lodash"
/**
 * useAmount Hook
 * @returns 
 */

const useAmount = () => {
      const amountState = useAppSelector(_amount)
      const dispatch = useAppDispatch()
      /**************************
      Handler For Amount
      ***************************/
      const _updateAmount = React.useCallback((payload: number) => {
            if (payload < 0 || payload === 0) {
                  dispatch(amount.actions.updateAmount(1))
            } else {
                  dispatch(amount.actions.updateAmount(payload))
            }

      }, [amountState])
      const updateAmount = debounce((payload) => _updateAmount(payload), 100)
      // Return Values
      return { amountState, updateAmount }

}
export default useAmount;