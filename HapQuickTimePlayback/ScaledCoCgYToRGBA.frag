uniform sampler2D cocgsy_src;

const vec4 offsets = vec4(-0.50196078431373, -0.50196078431373, 0.0, 0.0);

void main()
{
    vec4 CoCgSY = texture2D(cocgsy_src, gl_TexCoord[0].xy);
    
    CoCgSY += offsets;
    
    float scale = ( CoCgSY.z * ( 255.0 / 8.0 ) ) + 1.0;
    
    float Co = CoCgSY.x / scale;
    float Cg = CoCgSY.y / scale;
    float Y = CoCgSY.w;
    
    vec4 rgba = vec4(Y + Co - Cg, Y + Cg, Y - Co - Cg, 1.0);
    
    gl_FragColor = rgba;
}
