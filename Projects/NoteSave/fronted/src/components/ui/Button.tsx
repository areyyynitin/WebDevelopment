interface ButtonProps{
    variant : "primary" | "secondary";
    size : "sm" | "md" | "lg";
    text:string;
    startIcon?:any;
    endIcon?:any
    onClick: () => void
}

export const Button = (props: ButtonProps) => {

  return (
    <>
    <div>
      <button></button>
    </div>
    </>
  )
}

<Button variant="primary" size="md" text="submit" startIcon={"-"} endIcon={"+"} onClick={() => {} } />

