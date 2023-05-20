import React, {useState} from 'react';

type Props = {

};

interface ITreeNode {
    id: string;
    children: ITreeNode[];
}

interface ITreeButtonProps {
    node: ITreeNode;
    onAddSubNode?: (parentId: string) => void;
}

export const TreeButton = ({ node, onAddSubNode }: ITreeButtonProps) => {

    const [expanded, setExpanded] = useState(false);

    const handleAddSubNode = () => {
        (node && onAddSubNode) && onAddSubNode(node.id);
    };

    const handleToggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginLeft: '8px' }}>
                {node && node.children.length > 0 && (
                    <button onClick={handleToggleExpand}>{expanded ? '-' : '+'}</button>
                )}
            </div>
            <div>{node && node.id}</div>
            <div style={{ marginLeft: '8px' }}>
                <button onClick={handleAddSubNode}>Add Subnode</button>
            </div>
            {expanded && (
                <div style={{ marginLeft: '16px' }}>
                    {node && node.children.map((child) => (
                        <div key={child.id} style={{ display: 'flex', alignItems: 'center' }}>
                            <div>|</div>
                            <div style={{ marginLeft: '8px' }}>
                                <TreeButton node={child} onAddSubNode={onAddSubNode} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};