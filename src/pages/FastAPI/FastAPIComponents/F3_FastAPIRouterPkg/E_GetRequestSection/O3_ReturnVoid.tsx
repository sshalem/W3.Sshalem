/*


*/

import { MainChildArea } from "../../../../../components";
import { PythonHighlight, SpanGrey } from "../../../../../components/Highlight";

const O3_ReturnVoid = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        Return no content (like <SpanGrey>ResponseEntity{"<Void>"}</SpanGrey> )
        <PythonHighlight pythonCode={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O3_ReturnVoid;

const _1_ = `@router.get("/void")
def get_void(item_id: int):    
    return Response(status_code=204)  # No Content
`;
