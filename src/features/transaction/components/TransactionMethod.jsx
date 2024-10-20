import TransactionForm from "./TransactionForm";
import Btn from "@/components/btn/Btn";

const TransactionMethod = () => {
  return (
    <div className="board__payment-method pb-10 md:pb-[200px]">
      <div className="w-full max-w-[488px]">
        <div className="w-full">
          <Btn text="Payment with cash" styling="w-full btn btn--secondary btn--lg" />
          <p className="text-sm mt-8 text-center relative after:absolute after:w-[30%] after:md:w-[35%] after:h-[1px] after:bg-basic after:top-1/2 after:-translate-y-1/2 after:right-0 before:absolute before:w-[30%] before:md:w-[35%] before:h-[1px] before:bg-basic before:top-1/2 before:-translate-y-1/2 before:left-0">or pay with card</p>
        </div>

        <TransactionForm />
      </div>
    </div>
  );
};

export default TransactionMethod;
