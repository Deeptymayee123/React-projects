import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId(); //it gives a unique value

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId} //now we bind the amount
          className="text-black/40 mb-2 inline-block"
        >
          {label}
          {/* which is shown in o/p in from  */}
        </label>
        <input
          id={amountInputId} //now we bind the amount bcz actually it gives using tab etc.
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          } //checker
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          // if value i.e selectCurrency change it must change here.
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} //no need to chage here in number.
          disabled={currencyDisable}
        >
          {/* now we loop the options. */}
          {currencyOptions.map(
            (
              currency //if we give {} here we need to return then.
            ) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            )
          )}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
